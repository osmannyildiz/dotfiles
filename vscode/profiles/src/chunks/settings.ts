import type { LanguageId, SettingsChunk } from "../definitions";

const forLanguages = (...languageIds: LanguageId[]): string => {
	return "[" + languageIds.join("][") + "]";
}

export const base: SettingsChunk = {
	basicSettings: {
		// ===== VISUAL =====
		"window.title": "${dirty}${rootName}",
		"window.commandCenter": true,
		"workbench.layoutControl.enabled": false,
		"workbench.editor.highlightModifiedTabs": true,
		"workbench.editor.untitled.hint": "hidden",
		"editor.renderWhitespace": "boundary",
		"editor.roundedSelection": false,
		"editor.cursorSmoothCaretAnimation": "on",
		"editor.renderLineHighlight": "all",
		"editor.bracketPairColorization.enabled": true,
		"editor.guides.bracketPairs": false,
		"editor.stickyScroll.enabled": true,

		// ===== BEHAVIOR =====
		"workbench.startupEditor": "none",
		"workbench.editor.languageDetection": false,
		"editor.copyWithSyntaxHighlighting": false,
		"editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?_",
		"editor.linkedEditing": true,
		"explorer.compactFolders": false,
		"explorer.autoReveal": false,
		"diffEditor.ignoreTrimWhitespace": false,
		"files.exclude": {
			"**/.git": true,
			"**/.svn": true,
			"**/.hg": true,
			"**/CVS": true,
			"**/.DS_Store": true,
			"**/Thumbs.db": true,
			"**/.classpath": true,
			"**/.project": true,
			"**/.settings": true,
			"**/.factorypath": true,
			"**/__pycache__": true,
			"**/.ipynb_checkpoints": true,
		},
		"editor.unicodeHighlight.allowedCharacters": {
			ı: true,
		},

		// ===== TERMINAL =====
		"terminal.integrated.showLinkHover": false,
		"terminal.integrated.enableFileLinks": false,
		"terminal.integrated.tabs.focusMode": "singleClick",
		"terminal.integrated.persistentSessionReviveProcess": "onExitAndWindowClose",

		// ===== HINTS =====
		"editor.parameterHints.cycle": true,
		// "editor.acceptSuggestionOnEnter": "off",
		"editor.suggest.snippetsPreventQuickSuggestions": false,

		// ===== MINIMAP =====
		"editor.minimap.size": "fit",
		"editor.minimap.showSlider": "always",
		"editor.minimap.renderCharacters": false,
		"editor.minimap.maxColumn": 80,

		// ===== MISC. =====
		"liveServer.settings.NoBrowser": true,
		"liveServer.settings.donotShowInfoMsg": true,
		"path-intellisense.extensionOnImport": true,
		"tabnine.experimentalAutoImports": true,
		"vscode-json-editor.theme": "dark",
		"redhat.telemetry.enabled": true,
		"files.associations": {
			".env*": "dotenv",
		},
	},
	objectSettings: {},
	arraySettings: {},
};

export const basePlus: SettingsChunk = {
	basicSettings: {
		// ===== TERMINAL =====
		"terminal.integrated.showExitAlert": false,

		// ===== INDENTATION =====
		"editor.detectIndentation": false, // Use manual values for editor.tabSize and editor.insertSpaces
		// editor.tabSize is 4 by default
		"editor.insertSpaces": false, // Use tabs (unless overridden per language)

		// ===== EXTENSION: GITLENS =====
		"gitlens.currentLine.enabled": false,
		"gitlens.codeLens.enabled": false,
		"gitlens.statusBar.enabled": false,
		"gitlens.hovers.enabled": false,

		// ===== EXTENSION: PRETTIER =====
		"prettier.useTabs": true,

		// ===== EXTENSION: CODE RUNNER =====
		"code-runner.saveFileBeforeRun": true,
		"code-runner.fileDirectoryAsCwd": true,
		"code-runner.clearPreviousOutput": true,

		// ===== EXTENSION: POWER MODE =====
		// "powermode.enabled": true,
		// "powermode.shake.enabled": false,
		// "powermode.explosionFrequency": 1,
		// "powermode.explosionSize": 12,
		// "powermode.combo.location": "off",
		// "powermode.shake.intensity": 2,

		// ===== MISC. =====
		"[dart]": {
			"editor.formatOnSave": true,
			"editor.formatOnType": true,
			"editor.rulers": [80],
			"editor.selectionHighlight": false,
			"editor.suggest.snippetsPreventQuickSuggestions": false,
			"editor.suggestSelection": "first",
			"editor.tabCompletion": "onlySnippets",
			"editor.wordBasedSuggestions": false,
		},
		"[csharp]": {
			"editor.formatOnSave": true,
			"editor.formatOnType": true,
		},
		"omnisharp.organizeImportsOnFormat": true,
		"[rust]": {
			"files.trimTrailingWhitespace": true,
			"files.trimFinalNewlines": true,
			"files.insertFinalNewline": true,
		},
		"processing.processingPath": "/home/osman/caylak/program_files/processing-3.5.4/processing-java",
		"processing.docs": "processing.org",
		"processing.py.isEnabled": false,
	},
	objectSettings: {
		[forLanguages("json", "jsonc")]: {
			"editor.formatOnSave": true,
		},
	},
	arraySettings: {}
};

export const web: SettingsChunk = {
	basicSettings: {},
	objectSettings: {
		[forLanguages("html", "vue")]: {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
		[forLanguages("css", "scss")]: {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
		[forLanguages("javascript", "typescript", "javascriptreact", "typescriptreact")]: {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
		[forLanguages("json", "jsonc")]: {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
	},
	arraySettings: {}
};

export const webPlus: SettingsChunk = {
	basicSettings: {
		"html.hover.references": false,
		"css.hover.references": false,
		"less.hover.references": false,
		"scss.hover.references": false,
	},
	objectSettings: {
		[forLanguages("html", "vue")]: {
			"editor.tabSize": 2,
			"editor.formatOnSave": true,
		},
		[forLanguages("css", "scss")]: {
			"editor.tabSize": 2,
			"editor.formatOnSave": true,
		},
		[forLanguages("javascript", "typescript", "javascriptreact", "typescriptreact")]: {
			"editor.tabSize": 2,
			"editor.formatOnSave": true,
			"editor.codeActionsOnSave": {
				"source.organizeImports": true,
			},
		},
		[forLanguages("php")]: {
			"editor.tabSize": 2,
			"files.trimTrailingWhitespace": true,
		},
	},
	arraySettings: {}
};

export const python: SettingsChunk = {
	basicSettings: {
		"python.formatting.provider": "black",
		"python.analysis.completeFunctionParens": true,
		"python.analysis.autoImportCompletions": true,
	},
	objectSettings: {
		[forLanguages("python")]: {
			"files.trimTrailingWhitespace": true,
			"files.trimFinalNewlines": true,
			"files.insertFinalNewline": true,
			
			"editor.insertSpaces": true,
			"editor.stickyTabStops": true,
			
			// "editor.formatOnSave": true,
			"editor.formatOnType": true,
		},
	},
	arraySettings: {}
};

export const linux: SettingsChunk = {
	basicSettings: {
		// ===== BEHAVIOR =====
		"files.hotExit": "onExitAndWindowClose",
		"window.restoreWindows": "preserve",
		"update.mode": "manual",
		
		// ===== VISUAL =====
		"terminal.integrated.fontSize": 13,

		// ===== PYTHON =====
		"python.defaultInterpreterPath": "/usr/local/bin/python3.10",

		// ===== EXTENSION: GITHUB =====
		"github.gitAuthentication": false,
	},
	objectSettings: {},
	arraySettings: {},
};

export const macos: SettingsChunk = {
	basicSettings: {},
	objectSettings: {},
	arraySettings: {},
};

export const windows: SettingsChunk = {
	basicSettings: {},
	objectSettings: {},
	arraySettings: {},
};
