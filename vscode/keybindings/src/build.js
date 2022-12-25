import * as fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import presets from "./presets/index.js";

const BUILD_DIR_PATH = dirname(fileURLToPath(import.meta.url)) + "/../dist";

async function writeToFile(result) {
	const resultJson = JSON.stringify(result, undefined, "\t");
	await fs.writeFile(`${BUILD_DIR_PATH}/keybindings.json`, resultJson);
}

const preset = process.argv[2];
await writeToFile(presets[preset]);
