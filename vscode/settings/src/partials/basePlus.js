export default {
	// ===== VISUAL =====
	"workbench.colorTheme": "Ayu Dark Bordered",

	// ===== TERMINAL =====
	"terminal.integrated.showExitAlert": false,

	// ===== INDENTATION =====
	"editor.detectIndentation": false, // Use manual values for editor.tabSize and editor.insertSpaces
	// editor.tabSize is 4 by default
	"editor.insertSpaces": false, // Use tabs (unless overridden per language)
	
	// ===== LANGUAGE: JSON =====
	"[json][jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true,
	},

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
	"processing.processingPath":
		"/home/osman/caylak/program_files/processing-3.5.4/processing-java",
	"processing.docs": "processing.org",
	"processing.py.isEnabled": false,

	// ===== TO BE ORGANIZED =====
	// null
};
