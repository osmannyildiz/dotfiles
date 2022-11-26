import * as fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import partials from "./partials/index.js";

const BUILD_DIR_PATH = dirname(fileURLToPath(import.meta.url)) + "/../dist";

async function writeSettings(settings) {
	const settingsJson = JSON.stringify(settings, undefined, "\t");
	await fs.writeFile(`${BUILD_DIR_PATH}/settings.json`, settingsJson);
}

const partialsToAdd = ["common", ...process.argv.slice(2)];
let settings = {};
partialsToAdd.forEach((partialId) => {
	settings = { ...settings, ...partials[partialId] };
});
await writeSettings(settings);
