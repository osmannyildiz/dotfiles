export default {
	// ===== BEHAVIOR =====
	"workbench.startupEditor": "none",
	"workbench.editor.languageDetection": false,
	"editor.copyWithSyntaxHighlighting": false,
	"editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?_",
	"editor.linkedEditing": true,
	"explorer.compactFolders": false,
	"explorer.autoReveal": false,
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
	},
	// "editor.unicodeHighlight.allowedCharacters": {
	// 	"ı": true
	// },

	// ===== INDENTATION =====
	"editor.detectIndentation": false, // Use manual values for editor.tabSize and editor.insertSpaces
	// editor.tabSize is 4 by default
	"editor.insertSpaces": false, // Use tabs by default

	// ===== VISUAL =====
	"workbench.colorTheme": "Ayu Dark Bordered",
	"window.title": "${dirty}${activeEditorShort}${separator}${rootName}",
	"workbench.editor.highlightModifiedTabs": true,
	"workbench.editor.untitled.hint": "hidden",
	"editor.renderWhitespace": "boundary",
	"editor.roundedSelection": false,
	"editor.cursorSmoothCaretAnimation": true,
	"editor.renderLineHighlight": "all",
	"editor.bracketPairColorization.enabled": true,
	"editor.guides.bracketPairs": false,

	// ===== HINTS =====
	"editor.parameterHints.cycle": true,
	// "editor.acceptSuggestionOnEnter": "off",
	"editor.suggest.snippetsPreventQuickSuggestions": false,

	// ===== MINIMAP =====
	"editor.minimap.size": "fit",
	"editor.minimap.showSlider": "always",
	"editor.minimap.renderCharacters": false,
	"editor.minimap.maxColumn": 80,

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
	"[rust]": {
		"files.trimTrailingWhitespace": true,
		"files.trimFinalNewlines": true,
		"files.insertFinalNewline": true,
	},
	"redhat.telemetry.enabled": true,

	// ===== TO BE ORGANIZED =====
	"editor.suggestSelection": "first",
	"vsintellicode.modify.editor.suggestSelection":
		"automaticallyOverrodeDefaultValue",
	"liveServer.settings.NoBrowser": true,
	"processing.processingPath":
		"/home/osman/caylak/program_files/processing-3.5.4/processing-java",
	"processing.docs": "processing.org",
	"processing.py.isEnabled": false,
	"omnisharp.organizeImportsOnFormat": true,
	"terminal.integrated.enableFileLinks": false,
	"terminal.integrated.persistentSessionReviveProcess": "onExitAndWindowClose",
	"terminal.integrated.showExitAlert": false,
	"terminal.integrated.showLinkHover": false,
	"terminal.integrated.tabs.focusMode": "singleClick",
	"liveServer.settings.donotShowInfoMsg": true,
	"code-runner.clearPreviousOutput": true,
	"code-runner.fileDirectoryAsCwd": true,
	"code-runner.saveFileBeforeRun": true,
	"path-intellisense.extensionOnImport": true,
	"tabnine.experimentalAutoImports": true,
	"editor.stickyScroll.enabled": true,
	"vscode-json-editor.theme": "dark",
	"files.associations": {
		".env*": "dotenv",
	},
	"diffEditor.ignoreTrimWhitespace": false,
};
