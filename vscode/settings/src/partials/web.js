export default {
	"html.hover.references": false,
	"css.hover.references": false,
	"less.hover.references": false,
	"scss.hover.references": false,

	"[html][vue]": {
		"editor.tabSize": 2,
		// "editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.defaultFormatter": "vscode.html-language-features",
	},

	"[css][scss]": {
		"editor.tabSize": 2,
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true,
	},

	"[javascript][typescript][javascriptreact][typescriptreact]": {
		"editor.tabSize": 2,
		"editor.defaultFormatter": "esbenp.prettier-vscode",
		"editor.formatOnSave": true,
		"editor.codeActionsOnSave": {
			"source.organizeImports": true,
		},
	},

	"[php]": {
		"editor.tabSize": 2,
		"files.trimTrailingWhitespace": true,
	},
};
