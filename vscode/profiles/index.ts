import { devices } from "./src/devices";
import { buildAppSettings, buildProfile } from "./src/lib";
import { profiles } from "./src/profiles";

main();

async function main() {
	const command = process.argv[2];
	switch (command) {
		case "help":
			help();
			break;
		case "build-app-settings":
			const deviceName = process.argv[3];
			await cmdBuildAppSettings(deviceName);
			break;
		case "build-profiles":
			const profileNamesToBuild = process.argv.slice(3);
			await cmdBuildProfiles(profileNamesToBuild);
			break;
		default:
			console.error(`ERROR: Command '${command}' does not exist. Try 'help'.`);
	}
}

function help() {
	console.log(`\
Available commands:
- help                                                Show this help text.
- build-app-settings <deviceName>                     Build app settings for given device.
- build-profiles <profileName> [...<profileNames>]    Build profile(s) with given name(s).
	`);
}

async function cmdBuildAppSettings(deviceName: string) {
	if (!deviceName) {
		console.error(`ERROR: No device name was given.`);
		return;
	}

	const device = devices.find((p) => p.name === deviceName);
	if (!device) {
		console.error(`ERROR: Device with name ${deviceName} doesn't exist.`);
		return;
	}

	buildAppSettings(device);
}

async function cmdBuildProfiles(profileNamesToBuild: string[]) {
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
