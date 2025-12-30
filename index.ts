import { readdir, mkdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import { processSpec, type GeneratorOptions } from "./src/generator";

const SPECS_DIR = "./specs";

const options: GeneratorOptions = {
    outputDir: "./generated",
    allInputFieldsRequired: false,
    allOutputFieldsRequired: true,
}

async function main() {
    console.log("OpenAPI to oRPC Contract Generator");
    console.log("===================================\n");


    if (options.allInputFieldsRequired) {
        console.log("Mode: All input fields required");
    }
    if (options.allOutputFieldsRequired) {
        console.log("Mode: All output fields required");
    }

    // Ensure output directory exists
    await mkdir(options.outputDir, { recursive: true });

    const files = await readdir(SPECS_DIR);

    console.log(`Found ${files.length} spec file(s):\n`);

    for (const specFile of files) {
        const ext = extname(specFile);
        const specName = basename(specFile, ext);
        console.log(`Processing: ${specFile}`);

        try {
            await processSpec(specName, join(SPECS_DIR, specFile), options);
            console.log(`  ✓ Generated successfully\n`);
        } catch (error) {
            console.error(`  ✗ Failed to process ${specFile}:`);
            console.error(`    ${error instanceof Error ? error.message : error}\n`);
        }
    }

    console.log("Done!");
}

await main()
