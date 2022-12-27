export default {
	// ===== VISUAL =====
	"window.title": "${dirty}${rootName}",
	"window.commandCenter": true,
	"workbench.layoutControl.enabled": false,
	"workbench.editor.highlightModifiedTabs": true,
	"workbench.editor.untitled.hint": "hidden",
	"editor.renderWhitespace": "boundary",
	"editor.roundedSelection": false,
	"editor.cursorSmoothCaretAnimation": true,
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

	// ===== TO BE ORGANIZED =====
	// null
};
