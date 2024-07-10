import type { KeybindingsChunk } from "../definitions";

export const mac: KeybindingsChunk = [
	{
		key: "ctrl+q",
		command: "-workbench.action.quickOpenView",
	},
	{
		key: "ctrl+q",
		command: "workbench.action.quickOpenView",
		when: "!terminalFocus",
	},
	{
		key: "ctrl+cmd+p",
		command: "workbench.action.quickTextSearch",
	},
];

export const regular: KeybindingsChunk = [
	// ===== MULTI CURSOR =====
	{
		key: "ctrl+alt+up",
		command: "editor.action.insertCursorAbove",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+up",
		command: "-editor.action.insertCursorAbove",
		when: "editorTextFocus",
	},
	{
		key: "shift+alt+up",
		command: "-editor.action.insertCursorAbove",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+alt+down",
		command: "editor.action.insertCursorBelow",
		when: "editorTextFocus",
	},
	{
		key: "ctrl+shift+down",
		command: "-editor.action.insertCursorBelow",
		when: "editorTextFocus",
	},
	{
		key: "shift+alt+down",
		command: "-editor.action.insertCursorBelow",
		when: "editorTextFocus",
	},

	// ===== DUPLICATE LINE(S) =====
	{
		key: "shift+alt+up",
		command: "editor.action.copyLinesUpAction",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "ctrl+shift+alt+up",
		command: "-editor.action.copyLinesUpAction",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "shift+alt+down",
		command: "editor.action.copyLinesDownAction",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "ctrl+shift+alt+down",
		command: "-editor.action.copyLinesDownAction",
		when: "editorTextFocus && !editorReadonly",
	},

	// ===== DELETE LINE(S) =====
	{
		key: "shift+delete",
		command: "editor.action.deleteLines",
		when: "textInputFocus && !editorReadonly",
	},
	// {
	// 	key: "ctrl+shift+k",
	// 	command: "-editor.action.deleteLines",
	// 	when: "textInputFocus && !editorReadonly",
	// },

	// ===== CAMELHUMPS =====
	{
		key: "ctrl+right",
		command: "cursorWordPartRight",
		when: "textInputFocus",
	},
	{
		key: "ctrl+right",
		command: "-cursorWordEndRight",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+right",
		command: "cursorWordPartRightSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+right",
		command: "-cursorWordEndRightSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+left",
		command: "cursorWordPartLeft",
		when: "textInputFocus",
	},
	{
		key: "ctrl+left",
		command: "-cursorWordLeft",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+left",
		command: "cursorWordPartLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+left",
		command: "-cursorWordLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+backspace",
		command: "deleteWordPartLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+backspace",
		command: "-deleteWordLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+delete",
		command: "deleteWordPartRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+delete",
		command: "-deleteWordRight",
		when: "textInputFocus && !editorReadonly",
	},

	// ===== TOGGLE LINE COMMENT =====
	{
		key: "ctrl+numpad_divide",
		command: "editor.action.commentLine",
		when: "editorTextFocus && !editorReadonly",
	},
	// {
	// 	key: "ctrl+shift+7",
	// 	command: "-editor.action.commentLine",
	// 	when: "editorTextFocus && !editorReadonly",
	// },

	// ===== ADD PREVIOUS OCCURRENCE TO SELECTION =====
	{
		key: "ctrl+shift+d",
		command: "editor.action.addSelectionToPreviousFindMatch",
		when: "editorFocus",
	},
	{
		key: "ctrl+shift+d",
		command: "-workbench.view.debug",
		when: "viewContainer.workbench.view.debug.enabled",
	},

	// ===== CHANGE ALL OCCURRENCES =====
	{
		key: "f2",
		command: "editor.action.changeAll",
		when: "editorTextFocus && !editorReadonly",
	},
	{
		key: "ctrl+f2",
		command: "-editor.action.changeAll",
		when: "editorTextFocus && !editorReadonly",
	},

	// ===== RENAME SYMBOL =====
	{
		key: "ctrl+f2",
		command: "editor.action.rename",
		when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
	},
	{
		key: "f2",
		command: "-editor.action.rename",
		when: "editorHasRenameProvider && editorTextFocus && !editorReadonly",
	},

	// ===== SAVE ALL =====
	{
		key: "ctrl+alt+s",
		command: "workbench.action.files.saveFiles",
	},

	// ===== TOGGLE TERMINAL =====
	{
		key: "ctrl+[Backquote]",
		command: "workbench.action.terminal.toggleTerminal",
	},
];
