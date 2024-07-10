import { BUILD_DIR_PATH } from "./src/config";
import { buildProfile, deleteDir } from "./src/lib";
import * as profiles from "./src/profiles";

// TODO Get these from the rest of argv
const PROFILES_TO_BUILD = [profiles.tavsanMain, profiles.tavsanWork];

main();

async function main() {
	const command = process.argv[2];
	switch (command) {
		case "build":
			await build();
			break;
		default:
			throw new Error(`Command '${command}' does not exist.`);
	}
}

async function build() {
	await deleteDir(BUILD_DIR_PATH);

	for (const profile of PROFILES_TO_BUILD) {
		buildProfile(profile);
	}
}
