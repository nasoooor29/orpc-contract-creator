import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import { parse as parseYaml } from "yaml";
import { parseOpenAPISpec } from "./src/generator/openapi-parser";
import { generateZodSchemas } from "./src/generator/zod-generator";
import { generateContract } from "./src/generator/contract-builder";
import type { OpenAPISpec } from "./src/generator/types";

const SPECS_DIR = "./specs";
const OUTPUT_DIR = "./generated";

async function main() {
  console.log("OpenAPI to oRPC Contract Generator");
  console.log("===================================\n");

  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Get all spec files (JSON and YAML)
  const files = await readdir(SPECS_DIR);
  const specFiles = files.filter((f) => 
    f.endsWith(".json") || f.endsWith(".yaml") || f.endsWith(".yml")
  );

  console.log(`Found ${specFiles.length} spec file(s):\n`);

  for (const specFile of specFiles) {
    const ext = extname(specFile);
    const specName = basename(specFile, ext);
    console.log(`Processing: ${specFile}`);

    try {
      await processSpec(specName, join(SPECS_DIR, specFile));
      console.log(`  ✓ Generated successfully\n`);
    } catch (error) {
      console.error(`  ✗ Failed to process ${specFile}:`);
      console.error(`    ${error instanceof Error ? error.message : error}\n`);
    }
  }

  console.log("Done!");
}

async function processSpec(specName: string, specPath: string) {
  // Read and parse the OpenAPI spec
  const specContent = await readFile(specPath, "utf-8");
  const ext = extname(specPath);
  
  let spec: OpenAPISpec;
  if (ext === ".yaml" || ext === ".yml") {
    spec = parseYaml(specContent) as OpenAPISpec;
  } else {
    spec = JSON.parse(specContent);
  }

  console.log(`  - Parsing OpenAPI spec (${spec.info.title} v${spec.info.version})`);

  // Parse the spec to extract endpoints and schemas
  const { endpoints, schemas } = parseOpenAPISpec(spec);

  console.log(`  - Found ${endpoints.length} endpoint(s) and ${schemas.size} schema(s)`);

  // Create output directory for this spec
  const outputDir = join(OUTPUT_DIR, specName);
  await mkdir(outputDir, { recursive: true });

  // Generate Zod schemas
  console.log(`  - Generating Zod schemas...`);
  const zodContent = await generateZodSchemas(schemas, spec);
  await writeFile(join(outputDir, "zod-types.gen.ts"), zodContent);

  // Generate contract
  console.log(`  - Generating oRPC contract...`);
  const contractContent = generateContract(endpoints, schemas, specName);
  await writeFile(join(outputDir, "contract.ts"), contractContent);

  // Generate client helper
  const clientContent = generateClient(specName);
  await writeFile(join(outputDir, "client.ts"), clientContent);
}

function generateClient(specName: string): string {
  return `import type { JsonifiedClient } from "@orpc/openapi-client";
import type { ContractRouterClient } from "@orpc/contract";
import { createORPCClient } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { contract } from "./contract";

/**
 * Create a type-safe client for the ${specName} API
 */
export function create${toPascalCase(specName)}Client(baseUrl: string) {
  const link = new OpenAPILink(contract, {
    url: baseUrl,
  });

  return createORPCClient(link) as JsonifiedClient<
    ContractRouterClient<typeof contract>
  >;
}

export type ${toPascalCase(specName)}Client = ReturnType<typeof create${toPascalCase(specName)}Client>;
`;
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

main().catch(console.error);
