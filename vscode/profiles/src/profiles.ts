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

export const mainWindows: Profile = {
	name: "Main_windows",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.windows,
		settingsChunks.python,
		{
			basicSettings: {
				"workbench.colorTheme": "monokai-charcoal",
			},
		},
	],
	keybindings: [keybindingsChunks.regular],
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
		extensionsChunks.windowsDev,
		extensionsChunks.windows,
		extensionsChunks.python,
		extensionsChunks.rust,
	],
};

export const mainLinux: Profile = {
	name: "Main_linux",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.linux,
		settingsChunks.python,
		{
			basicSettings: {
				"workbench.colorTheme": "monokai-charcoal",
			},
		},
	],
	keybindings: [keybindingsChunks.regular],
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
		extensionsChunks.php,
		extensionsChunks.python,
		extensionsChunks.rust,
	],
};

export const workLinux: Profile = {
	name: "Work_linux",
	settings: [
		settingsChunks.base,
		settingsChunks.work,
		settingsChunks.web,
		settingsChunks.linux,
		settingsChunks.python,
		{
			basicSettings: {
				"workbench.colorTheme": "GitHub Dark Default",
			},
		},
	],
	keybindings: [keybindingsChunks.regular],
	snippets: [],
	extensions: [
		extensionsChunks.base,
		extensionsChunks.work,
		extensionsChunks.web,
		extensionsChunks.js,
		extensionsChunks.python,
		["github.github-vscode-theme"],
	],
};

export const web3Linux: Profile = {
	name: "Web3_linux",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web3,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.linux,
		{
			basicSettings: {
				"workbench.colorTheme": "Bearded Theme Solarized Reversed",
			},
		},
	],
	keybindings: [keybindingsChunks.regular],
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
		extensionsChunks.go,
		extensionsChunks.rust,
	],
};

export const profiles = [
	mainMacos,
	workMacos,
	web3Macos,
	mainWindows,
	mainLinux,
	workLinux,
	web3Linux,
];
