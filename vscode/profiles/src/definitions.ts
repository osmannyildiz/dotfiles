export interface Profile {
	name: string;
	settings: SettingsChunk[];
	keybindings: KeybindingsChunk[];
	snippets: SnippetsChunk[];
	extensions: ExtensionsChunk[];
}

export interface SettingsChunk {
	basicSettings: Record<string, any>;
	objectSettings: Record<string, Record<string, any>>;
	arraySettings: Record<string, any[]>;
}

export type KeybindingsChunk = KeybindingsItem[];
interface KeybindingsItem {
	key: string;
	command: string;
	when?: string;
}

export type SnippetsChunk = Partial<
	Record<LanguageId, Record<string, SnippetsItem>>
>;
interface SnippetsItem {
	prefix: string;
	body: string[];
	description?: string;
}

export type ExtensionsChunk = string[];

export type LanguageId =
	| "csharp"
	| "css"
	| "dart"
	| "html"
	| "javascript"
	| "javascriptreact"
	| "json"
	| "jsonc"
	| "php"
	| "python"
	| "rust"
	| "scss"
	| "solidity"
	| "typescript"
	| "typescriptreact"
	| "vue";
