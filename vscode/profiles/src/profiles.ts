import * as extensionsChunks from "./chunks/extensions";
import * as keybindingsChunks from "./chunks/keybindings";
import * as settingsChunks from "./chunks/settings";
import * as snippetsChunks from "./chunks/snippets";
import type { Profile } from "./definitions";

export const tavsanMain: Profile = {
	name: "tavsan_Main",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.python,
		settingsChunks.macos,
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
		extensionsChunks.php,
		extensionsChunks.python,
		extensionsChunks.macos,
		extensionsChunks.docker,
		extensionsChunks.rust,
	],
};

export const tavsanWork: Profile = {
	name: "tavsan_Work",
	settings: [
		settingsChunks.base,
		settingsChunks.work,
		settingsChunks.web,
		settingsChunks.macos,
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
		["github.github-vscode-theme"],
	],
};

export const caylakLMain: Profile = {
	name: "caylak-l_Main",
	settings: [
		settingsChunks.base,
		settingsChunks.basePlus,
		settingsChunks.web,
		settingsChunks.webPlus,
		settingsChunks.python,
		settingsChunks.linux,
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
		extensionsChunks.vue,
		extensionsChunks.php,
		extensionsChunks.python,
		extensionsChunks.cpp,
		extensionsChunks.csharp,
		extensionsChunks.processing,
	],
};
