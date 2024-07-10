import type { SnippetsChunk } from "../definitions";

const jsCommonSnippets = {
	// "Log to console": {
	// 	"prefix": "con",
	// 	"body": [
	// 		"console.log($0);"
	// 	]
	// }
};

export const main: SnippetsChunk = {
	// javascript: {
	// 	...jsCommonSnippets,
	// },
	// javascriptreact: {
	// 	...jsCommonSnippets,
	// },
	// typescript: {
	// 	...jsCommonSnippets,
	// },
	// typescriptreact: {
	// 	...jsCommonSnippets,
	// },
	html: {
		"Moustache": {
			"prefix": "{",
			"body": [
				"{{ $0 }}"
			]
		}
	},
	python: {
		"Main block": {
			"prefix": "if n",
			"body": [
				"if __name__ == \"__main__\":",
				/*"\t${1:pass}"*/
				"\t$0"
			]
		},
		"SQLAlchemy column": {
			"prefix": "col",
			"body": [
				"$1 = db.Column(db.$2)"
			]
		}
	},
	csharp: {
		"Console.WriteLine": {
			"prefix": "con",
			"body": [
				"Console.WriteLine($0);"
			]
		}
	}
}
