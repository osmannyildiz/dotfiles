import * as fs from "fs/promises";
import { BUILD_DIR_PATH } from "./config";
import type {
	ExtensionsChunk,
	KeybindingsChunk,
	LanguageId,
	Profile,
	SettingsChunk,
	SnippetsChunk
} from "./definitions";

export const buildProfile = async (profile: Profile) => {
	await createDir(getDirPathForProfile(profile));
	await buildSettingsOfProfile(profile);
	await buildKeybindingsOfProfile(profile);
	await buildSnippetsOfProfile(profile);
	await buildExtensionsOfProfile(profile);
};

const buildSettingsOfProfile = async (profile: Profile) => {
	const mergedSettings: SettingsChunk = {
		basicSettings: {},
		objectSettings: {},
		arraySettings: {},
	};
	for (const settingsChunk of profile.settings) {
		mergedSettings.basicSettings = {
			...mergedSettings.basicSettings,
			...settingsChunk.basicSettings
		};

		for (const objectSettingKey in settingsChunk.objectSettings) {
			mergedSettings.objectSettings[objectSettingKey] = {
				...mergedSettings.objectSettings[objectSettingKey],
				...settingsChunk.objectSettings[objectSettingKey]
			};
		}

		for (const arraySettingKey in settingsChunk.arraySettings) {
			mergedSettings.arraySettings[arraySettingKey] = [
				...mergedSettings.arraySettings[arraySettingKey],
				...settingsChunk.arraySettings[arraySettingKey]
			];
		}
	}

	const settingsToBeWritten = {
		...mergedSettings.basicSettings,
		...mergedSettings.objectSettings,
		...mergedSettings.arraySettings,
	};
	await writeJsonFileInProfile(profile, "settings.json", settingsToBeWritten);
};

const buildKeybindingsOfProfile = async (profile: Profile) => {
	let mergedKeybindings: KeybindingsChunk = [];
	for (const keybindingsChunk of profile.keybindings) {
		// Convert the square brackets below to curly brackets and watch TS not give an error :(
		mergedKeybindings = [
			...mergedKeybindings,
			...keybindingsChunk
		];
	}

	await writeJsonFileInProfile(profile, "keybindings.json", mergedKeybindings);
};

const buildSnippetsOfProfile = async (profile: Profile) => {
	let mergedSnippets: SnippetsChunk = {};
	for (const snippetsChunk of profile.snippets) {
		for (const _languageId in snippetsChunk) {
			const languageId = _languageId as LanguageId;  // Thanks TS :(
			const snippetsForLanguage = snippetsChunk[languageId];
			mergedSnippets[languageId] = {
				...mergedSnippets[languageId],
				...snippetsForLanguage
			}
		}
	}

	createDirInProfile(profile, "snippets");
	for (const _languageId in mergedSnippets) {
		const languageId = _languageId as LanguageId;
		await writeJsonFileInProfile(profile, `snippets/${languageId}.json`, mergedSnippets[languageId]);
	}
}

const buildExtensionsOfProfile = async (profile: Profile) => {
	let mergedExtensions: ExtensionsChunk = [];
	for (const extensionsChunk of profile.extensions) {
		mergedExtensions = [
			...mergedExtensions,
			...extensionsChunk
		];
	}

	const content = mergedExtensions.join("\n");
	await writeTextFileInProfile(profile, "extensions.txt", content);
}

const writeJsonFileInProfile = async (profile: Profile, filePath: string, content: any) => {
	const contentJson = JSON.stringify(content, undefined, "\t");
	await writeTextFileInProfile(profile, filePath, contentJson);
};

const writeTextFileInProfile = async (profile: Profile, filePath: string, content: string) => {
	await fs.writeFile(`${getDirPathForProfile(profile)}/${filePath}`, content);
};

const createDirInProfile = async (profile: Profile, dirPath: string) => {
	await createDir(`${getDirPathForProfile(profile)}/${dirPath}`);
};

const createDir = async (dirPath: string) => {
	// Note: fs.mkdir doesn't throw if the dir exists.
	await fs.mkdir(dirPath, { recursive: true });
};

export const deleteDir = async (dirPath: string) => {
	// Note: fs.rm throws if the dir does not exist.
	try {
		await fs.rm(dirPath, { recursive: true });
	} catch (err: any) {
		if (err.code === "ENOENT") {
			return;
		}
		throw err;
	}
};

const getDirPathForProfile = (profile: Profile): string => {
	return `${BUILD_DIR_PATH}/${profile.name}`;
};
