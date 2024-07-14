import { buildProfile } from "./src/lib";
import { profiles } from "./src/profiles";

main();

async function main() {
	const command = process.argv[2];
	switch (command) {
		case "help":
			help();
			break;
		case "build":
			const profileNamesToBuild = process.argv.slice(3);
			await build(profileNamesToBuild);
			break;
		default:
			console.error(`ERROR: Command '${command}' does not exist. Try 'help'.`);
	}
}

function help() {
	console.log(`\
Available commands:
- help                                       Show this help text.
- build <profileName> [...<profileNames>]    Build profile(s) with given name(s).
	`);
}

async function build(profileNamesToBuild: string[]) {
	if (profileNamesToBuild.length === 0) {
		console.error(`ERROR: No profile names were given.`);
		return;
	}
	for (const profileName of profileNamesToBuild) {
		const profile = profiles.find((p) => p.name === profileName);
		if (!profile) {
			console.error(`ERROR: Profile with name ${profileName} doesn't exist.`);
			continue;
		}
		buildProfile(profile);
	}
}
