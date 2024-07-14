import * as extensionsChunks from "./chunks/extensions";
import * as keybindingsChunks from "./chunks/keybindings";
import * as settingsChunks from "./chunks/settings";
import * as snippetsChunks from "./chunks/snippets";
import type { Profile } from "./definitions";

export const mainMacos: Profile = {
	name: "Main_macos",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.macos,
		settingsChunks.python,
		{
			basicSettings: {
				"workbench.colorTheme": "monokai-charcoal",
			},
			objectSettings: {},
			arraySettings: {},
		},
	],
	keybindings: [keybindingsChunks.mac],
	snippets: [snippetsChunks.main],
	extensions: [
		extensionsChunks.base,
		extensionsChunks.basePlus,
		extensionsChunks.themes,
		extensionsChunks.themesPlus,
		extensionsChunks.web,
		extensionsChunks.webPlus,
		extensionsChunks.js,
		extensionsChunks.db,
		extensionsChunks.devops,
		extensionsChunks.docker,
		extensionsChunks.macosDev,
		extensionsChunks.macos,
		extensionsChunks.php,
		extensionsChunks.python,
		extensionsChunks.rust,
	],
};

// export const mainLinux: Profile = {
// 	name: "Main_linux",
// 	settings: [
// 		settingsChunks.base,
// 		settingsChunks.basePlus,
// 		settingsChunks.web,
// 		settingsChunks.webPlus,
// 		settingsChunks.python,
// 		settingsChunks.linux,
// 	],
// 	keybindings: [keybindingsChunks.regular],
// 	snippets: [snippetsChunks.main],
// 	extensions: [
// 		extensionsChunks.base,
// 		extensionsChunks.basePlus,
// 		extensionsChunks.themes,
// 		extensionsChunks.themesPlus,
// 		extensionsChunks.web,
// 		extensionsChunks.webPlus,
// 		extensionsChunks.js,
// 		extensionsChunks.vue,
// 		extensionsChunks.php,
// 		extensionsChunks.python,
// 		extensionsChunks.cpp,
// 		extensionsChunks.csharp,
// 		extensionsChunks.processing,
// 	],
// };

export const workMacos: Profile = {
	name: "Work_macos",
	settings: [
		settingsChunks.base,
		settingsChunks.work,
		settingsChunks.web,
		settingsChunks.macos,
		settingsChunks.python,
		{
			basicSettings: {
				"workbench.colorTheme": "GitHub Dark Default",
			},
			objectSettings: {},
			arraySettings: {},
		},
	],
	keybindings: [keybindingsChunks.mac],
	snippets: [],
	extensions: [
		extensionsChunks.base,
		extensionsChunks.work,
		extensionsChunks.web,
		extensionsChunks.js,
		extensionsChunks.macos,
		extensionsChunks.python,
		["github.github-vscode-theme"],
	],
};

export const web3Macos: Profile = {
	name: "Web3_macos",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web3,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.macos,
		{
			basicSettings: {
				"workbench.colorTheme": "Bearded Theme Solarized Reversed",
			},
			objectSettings: {},
			arraySettings: {},
		},
	],
	keybindings: [keybindingsChunks.mac],
	snippets: [snippetsChunks.main],
	extensions: [
		extensionsChunks.base,
		extensionsChunks.basePlus,
		extensionsChunks.web3,
		extensionsChunks.themes,
		extensionsChunks.web,
		extensionsChunks.webPlus,
		extensionsChunks.js,
		extensionsChunks.docker,
		extensionsChunks.macos,
		extensionsChunks.go,
		extensionsChunks.rust,
	],
};

export const profiles = [mainMacos, workMacos, web3Macos];
