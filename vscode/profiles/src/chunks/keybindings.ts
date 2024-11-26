import type { KeybindingsChunk } from "../definitions";

export const mac: KeybindingsChunk = [
	// ===== MULTI CURSOR =====
	// alt+cmd+up => editor.action.insertCursorAbove
	// alt+cmd+down => editor.action.insertCursorBelow

	// ===== DUPLICATE LINE(S) =====
	// shift+alt+up => editor.action.copyLinesUpAction
	// shift+alt+down => editor.action.copyLinesDownAction

	// ===== DELETE LINE(S) =====
	// shift+backspace => editor.action.deleteLines
	// cmd+backspace => deleteAllLeft
	// cmd+delete => deleteAllRight
	{
		key: "shift+backspace",
		command: "editor.action.deleteLines",
		when: "textInputFocus",
	},
	{
		key: "shift+backspace",
		command: "-deleteLeft",
		when: "textInputFocus",
	},
	{
		key: "shift+cmd+k",
		command: "-editor.action.deleteLines",
		when: "textInputFocus && !editorReadonly",
	},

	// ===== CAMELHUMPS =====
	{
		key: "alt+right",
		command: "cursorWordPartRight",
		when: "textInputFocus",
	},
	{
		key: "ctrl+alt+right",
		command: "-cursorWordPartRight",
		when: "textInputFocus",
	},
	{
		key: "alt+right",
		command: "-cursorWordEndRight",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+right",
		command: "cursorWordPartRightSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+alt+right",
		command: "-cursorWordPartRightSelect",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+right",
		command: "-cursorWordEndRightSelect",
		when: "textInputFocus",
	},
	{
		key: "alt+left",
		command: "cursorWordPartLeft",
		when: "textInputFocus",
	},
	{
		key: "ctrl+alt+left",
		command: "-cursorWordPartLeft",
		when: "textInputFocus",
	},
	{
		key: "alt+left",
		command: "-cursorWordLeft",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+left",
		command: "cursorWordPartLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "ctrl+shift+alt+left",
		command: "-cursorWordPartLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "shift+alt+left",
		command: "-cursorWordLeftSelect",
		when: "textInputFocus",
	},
	{
		key: "alt+backspace",
		command: "deleteWordPartLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+alt+backspace",
		command: "-deleteWordPartLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "alt+backspace",
		command: "-deleteWordLeft",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "alt+delete",
		command: "deleteWordPartRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+alt+delete",
		command: "-deleteWordPartRight",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "alt+delete",
		command: "-deleteWordRight",
		when: "textInputFocus && !editorReadonly",
	},

	// ===== TOGGLE LINE COMMENT =====
	// cmd+shift+7 => editor.action.commentLine

	// ===== ADD PREVIOUS OCCURRENCE TO SELECTION =====
	// cmd+d => addSelectionToNextFindMatch
	// shift+cmd+d => addSelectionToPreviousFindMatch
	{
		key: "shift+cmd+d",
		command: "editor.action.addSelectionToPreviousFindMatch",
		when: "editorFocus",
	},
	{
		key: "shift+cmd+d",
		command: "-workbench.view.debug",
		when: "viewContainer.workbench.view.debug.enabled",
	},

	// ===== NEW LINE BELOW =====
	// cmd+enter => editor.action.insertLineAfter

	// ===== SAVE ALL =====
	// ctrl+alt+cmd+s => workbench.action.files.saveFiles
	{
		key: "ctrl+alt+cmd+s",
		command: "workbench.action.files.saveFiles",
	},

	// ===== SAVE WITHOUT FORMATTING =====
	// ctrl+cmd+s => workbench.action.files.saveWithoutFormatting
	{
		key: "ctrl+cmd+s",
		command: "workbench.action.files.saveWithoutFormatting",
	},
	{
		key: "cmd+k s",
		command: "-workbench.action.files.saveWithoutFormatting",
	},

	// ===== TOGGLE TERMINAL =====
	{
		key: "ctrl+[IntlBackslash]",
		command: "workbench.action.terminal.toggleTerminal",
	},

	// ===== DON'T INTERCEPT CTRL+Q IN TERMINAL =====
	{
		key: "ctrl+q",
		command: "-workbench.action.quickOpenView",
	},
	{
		key: "ctrl+q",
		command: "workbench.action.quickOpenView",
		when: "!terminalFocus",
	},

	// ===== MISC. =====
	// ctrl+cmd+p => workbench.action.quickTextSearch
	{
		key: "ctrl+cmd+p",
		command: "workbench.action.quickTextSearch",
	},
];

export const regular: KeybindingsChunk = [
	// ===== MULTI CURSOR =====
	// ctrl+alt+up => editor.action.insertCursorAbove
	// ctrl+alt+down => editor.action.insertCursorBelow
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
	// shift+alt+up => editor.action.copyLinesUpAction
	// shift+alt+down => editor.action.copyLinesDownAction
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
	// shift+delete => editor.action.deleteLines
	{
		key: "shift+delete",
		command: "editor.action.deleteLines",
		when: "textInputFocus && !editorReadonly",
	},
	{
		key: "ctrl+shift+k",
		command: "-editor.action.deleteLines",
		when: "textInputFocus && !editorReadonly",
	},

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
	// ctrl+numpad_divide => editor.action.commentLine
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
	// ctrl+d => addSelectionToNextFindMatch
	// ctrl+shift+d => addSelectionToPreviousFindMatch
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

	// ===== NEW LINE BELOW =====
	// ctrl+enter => editor.action.insertLineAfter

	// ===== SAVE WITHOUT FORMATTING =====
	// ctrl+alt+s => workbench.action.files.saveWithoutFormatting
	{
		key: "ctrl+alt+s",
		command: "workbench.action.files.saveWithoutFormatting",
	},

	// ===== TOGGLE TERMINAL =====
	{
		key: "ctrl+[Backquote]",
		command: "workbench.action.terminal.toggleTerminal",
	},

	// ===== MISC. =====
	// ctrl+alt+p => workbench.action.quickTextSearch
	{
		key: "ctrl+alt+p",
		command: "workbench.action.quickTextSearch",
	},
];
