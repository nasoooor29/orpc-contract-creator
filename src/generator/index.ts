import { extname, join } from "path";
import type { GeneratorOptions, OpenAPISpec } from "./types";
import { readFile, mkdir, writeFile, access } from "fs/promises";
import { parse as parseYaml } from "yaml";
import { parseOpenAPISpec } from "./openapi-parser";
import { generateZodSchemas } from "./zod-generator";
import { generateTSInterfaces } from "./ts-generator";
import { generateContract } from "./contract-builder";
import { generateClient } from "./client-generator";

export async function processSpec(specName: string, specPath: string, options: GeneratorOptions = {
    outputDir: "./generated",
}) {
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
    const outputDir = join(options.outputDir, specName);
    await mkdir(outputDir, { recursive: true });

    // Generate TypeScript interfaces (pure types, no runtime)
    console.log(`  - Generating TypeScript interfaces...`);
    const tsContent = await generateTSInterfaces(schemas, spec, options);
    await writeFile(join(outputDir, "types.gen.ts"), tsContent);

    // Generate Zod schemas (for oRPC runtime validation)
    console.log(`  - Generating Zod schemas...`);
    const zodContent = await generateZodSchemas(schemas, spec, options);
    await writeFile(join(outputDir, "zod-types.gen.ts"), zodContent);

    // Generate contract
    console.log(`  - Generating oRPC contract...`);
    const contractContent = generateContract(endpoints, schemas, specName, options);
    await writeFile(join(outputDir, "contract.ts"), contractContent);

    // Generate client helper
    const clientPath = join(outputDir, "client.ts");
    try {
        await access(clientPath);
        // File exists, do not overwrite
    } catch {
        // File does not exist, generate and write
        const clientContent = generateClient(specName);
        await writeFile(clientPath, clientContent);
    }

    // Generate index file
    console.log(`  - Generating index file...`);
    const indexContent = generateIndex(specName);
    await writeFile(join(outputDir, "index.ts"), indexContent);
}

function toPascalCase(str: string): string {
    return str
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
}

function generateIndex(specName: string): string {
    const pascalName = toPascalCase(specName);

    return `// Auto-generated index file for ${specName}

// Pure TypeScript types (no runtime overhead)
export * from "./types.gen";

// Zod schemas (for runtime validation)
export * as Z from "./zod-types.gen";

// oRPC contract and client
export { contract } from "./contract";
export { create${pascalName}Client } from "./client";
export type { ${pascalName}Client } from "./client";
`;
}

export async function generateIndexFile(specName: string, outputDir: string): Promise<void> {
    const indexPath = join(outputDir, specName, "index.ts");
    const indexContent = generateIndex(specName);
    await writeFile(indexPath, indexContent);
}

export * from "./types";
export * from "./openapi-parser";
export * from "./zod-generator";
export * from "./ts-generator";
export * from "./contract-builder";
export * from "./client-generator";
