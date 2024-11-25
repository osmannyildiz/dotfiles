import type { LanguageId, SettingsChunk } from "../definitions";

const forLanguages = (...languageIds: LanguageId[]): string => {
	return "[" + languageIds.join("][") + "]";
};

// ===== GENERAL =====

export const base: SettingsChunk = {
	basicSettings: {
		// ===== VISUAL =====
		"window.title": "${dirty}${rootName}",
		"window.commandCenter": true,
		"workbench.layoutControl.enabled": false,
		"workbench.editor.highlightModifiedTabs": true,
		"workbench.editor.empty.hint": "hidden",
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
		"editor.stickyTabStops": true,
		"editor.linkedEditing": true,
		"editor.accessibilitySupport": "off",
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
		"terminal.integrated.enableFileLinks": "off",
		"terminal.integrated.tabs.focusMode": "singleClick",
		"terminal.integrated.persistentSessionReviveProcess":
			"onExitAndWindowClose",

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
		"files.associations": {
			"*.env*": "env",
		},

		// ===== EXTENSIONS =====
		"errorLens.enabledDiagnosticLevels": ["error", "warning"],
		"gitlens.views.scm.grouped.views": {
			"commits": false,
			"branches": false,
			"remotes": false,
			"stashes": false,
			"tags": false,
			"worktrees": false,
			"contributors": false,
			"repositories": false,
			"searchAndCompare": false,
			"launchpad": false
		},
		"path-intellisense.extensionOnImport": true,
		"redhat.telemetry.enabled": true,
		"vscode-json-editor.theme": "dark",
	},
	objectSettings: {},
	arraySettings: {},
};

export const basePlus: SettingsChunk = {
	basicSettings: {
		// ===== TERMINAL =====
		"terminal.integrated.showExitAlert": false,

		// // ===== INDENTATION =====
		// "editor.detectIndentation": false, // Use manual values for editor.tabSize and editor.insertSpaces
		// // Defaults: editor.tabSize: 4, editor.insertSpaces: true
		// "editor.insertSpaces": false, // Use tabs (unless overridden per language)

		// ===== EXTENSIONS =====
		"gitlens.currentLine.enabled": false,
		"gitlens.codeLens.enabled": false,
		"gitlens.statusBar.enabled": false,
		"gitlens.hovers.enabled": false,
		"liveServer.settings.NoBrowser": true,
		"liveServer.settings.donotShowInfoMsg": true,
		// "powermode.enabled": true,
		// "powermode.shake.enabled": false,
		// "powermode.explosionFrequency": 1,
		// "powermode.explosionSize": 12,
		// "powermode.combo.location": "off",
		// "powermode.shake.intensity": 2,
		// "prettier.useTabs": true,
		// "processing.processingPath": "/home/osman/aa/programFiles/processing-3.5.4/processing-java",
		// "processing.docs": "processing.org",
		// "processing.py.isEnabled": false,
		"rust-analyzer.check.command": "clippy",
		"svelte.enable-ts-plugin": true,
		"cSpell.userWords": [
			"Ahmet",
			"bootcamp",
			"borsh",
			"Certbot",
			"dbconn",
			"devnet",
			"dotfiles",
			"Ionicons",
			"keypair",
			"lamport",
			"lamports",
			"motoko",
			"noopener",
			"noreferrer",
			"osmannyildiz",
			"phpinfo",
			"Pressable",
			"println",
			"Pubkey",
			"pubkeys",
			"pyenv",
			"sepolia",
			"solana",
			"tanstack",
			"todos",
		],
	},
	objectSettings: {
		// [forLanguages("csharp")]: {
		// 	"editor.formatOnSave": true,
		// 	"editor.formatOnType": true,
		// },
		// [forLanguages("dart")]: {
		// 	"editor.formatOnSave": true,
		// 	"editor.formatOnType": true,
		// 	"editor.rulers": [80],
		// 	"editor.selectionHighlight": false,
		// 	"editor.suggest.snippetsPreventQuickSuggestions": false,
		// 	"editor.suggestSelection": "first",
		// 	"editor.tabCompletion": "onlySnippets",
		// 	"editor.wordBasedSuggestions": "off",
		// },
		[forLanguages("json", "jsonc")]: {
			"editor.formatOnSave": true,
		},
		[forLanguages("rust")]: {
			"files.trimTrailingWhitespace": true,
			"files.trimFinalNewlines": true,
			"files.insertFinalNewline": true,
			"editor.insertSpaces": true,
			"editor.formatOnSave": true,
			"editor.defaultFormatter": "rust-lang.rust-analyzer",
		},
	},
	arraySettings: {},
};

export const work: SettingsChunk = {
	basicSettings: {
		"bootstrapAutocomplete.version": "4.5",
		"peacock.favoriteColors": [
			{
				name: "Angular Red",
				value: "#dd0531",
			},
			{
				name: "Azure Blue",
				value: "#007fff",
			},
			{
				name: "JavaScript Yellow",
				value: "#f9e64f",
			},
			{
				name: "Mandalorian Blue",
				value: "#1857a4",
			},
			{
				name: "Node Green",
				value: "#215732",
			},
			{
				name: "React Blue",
				value: "#61dafb",
			},
			{
				name: "Something Different",
				value: "#832561",
			},
			{
				name: "Svelte Orange",
				value: "#ff3d00",
			},
			{
				name: "Vue Green",
				value: "#42b883",
			},
			{
				name: "im cms",
				value: "#5e479c",
			},
			{
				name: "im fre",
				value: "#cc8e35",
			},
		],
	},
	objectSettings: {},
	arraySettings: {},
};

export const web3: SettingsChunk = {
	basicSettings: {
		"solidity.telemetry": true,
		"rust-analyzer.completion.snippets.custom": {
			"Get Account Info": {
				prefix: ["__GetAccountInfo"],
				body: ["let ${1:pda} = &mut ctx.accounts.${1:pda};"],
				requires: [],
				description: "Get Account Info",
				scope: "expr",
			},
			"Get Bump": {
				prefix: ["__GetBump"],
				body: ['${1:pda}.bump = *ctx.bumps.get("${1:pda}").unwrap();'],
				requires: [],
				description: "Get Bump",
				scope: "expr",
			},
			"Burn Tokens": {
				prefix: ["__BurnTokens"],
				body: [
					"invoke(",
					"    &burn(",
					"        &spl_token::ID,",
					"        ${1:token}_info.key,",
					"        ${2:mint}_info.key,",
					"        ${3:authority}_info.key,",
					"        &[],",
					"        ${4:amount},",
					"    )?,",
					"    &[",
					"        ${1:token}_info.clone(),",
					"        ${2:mint}_info.clone(),",
					"        ${3:authority}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"spl_token::instruction::burn",
				],
				description: "Burn Tokens",
				scope: "expr",
			},
			"Init Associated Token Account": {
				prefix: ["__InitAssociatedTokenAccount"],
				body: [
					"invoke(",
					"    &initialize_account(",
					"        &spl_token::ID,",
					"        ${1:token}_info.key,",
					"        ${2:mint}_info.key,",
					"        ${3:authority}_info.key,",
					"    )?,",
					"    &[",
					"        ${1:token}_info.clone(),",
					"        ${2:mint}_info.clone(),",
					"        ${3:authority}_info.clone(),",
					"        ${4:rent}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"spl_token::instruction::initialize_account",
				],
				description: "Init Associated Token Account",
				scope: "expr",
			},
			"Revoke Tokens Delegation": {
				prefix: ["__RevokeTokensDelegation"],
				body: [
					"invoke(",
					"    &revoke(",
					"        &spl_token::ID,",
					"        ${1:token}_info.key,",
					"        ${2:authority}_info.key,",
					"        &[],",
					"    )?,",
					"    &[",
					"        ${1:token}_info.clone(),",
					"        ${2:authority}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"spl_token::instruction::revoke",
				],
				description: "Revoke Tokens Delegation",
				scope: "expr",
			},
			"Transfer Tokens": {
				prefix: ["__TransferTokens"],
				body: [
					"invoke(",
					"    &transfer(",
					"        &spl_token::ID,",
					"        ${1:sender}_info.key,",
					"        ${2:receiver}_info.key,",
					"        ${3:authority}_info.key,",
					"        &[],",
					"        ${4:amount},",
					"    )?,",
					"    &[",
					"        ${1:sender}_info.clone(),",
					"        ${2:receiver}_info.clone(),",
					"        ${3:authority}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"spl_token::instruction::transfer",
				],
				description: "Transfer Tokens",
				scope: "expr",
			},
			"Delegate Tokens": {
				prefix: ["__DelegateTokens"],
				body: [
					"invoke(",
					"    &approve(",
					"        &spl_token::ID,",
					"        ${1:token}_info.key,",
					"        ${2:delegate}_info.key,",
					"        ${3:authority}_info.key,",
					"        &[],",
					"        ${4:amount},",
					"    )?,",
					"    &[",
					"        ${1:token}_info.clone(),",
					"        ${2:delegate}_info.clone(),",
					"        ${3:authority}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"spl_token::instruction::approve",
				],
				description: "Delegate Tokens",
				scope: "expr",
			},
			"Get Clock Sysvar": {
				prefix: ["__GetClockSysvar"],
				body: ["let ${1:clock} = Clock::get()?;"],
				requires: [
					"solana_program::sysvar::clock::Clock",
					"solana_program::sysvar::Sysvar",
				],
				description: "Get Clock Sysvar",
				scope: "expr",
			},
			"Get Account": {
				prefix: ["__GetAccount"],
				body: [
					"let ${1:account}_info = next_account_info(account_info_iter)?;",
				],
				requires: ["solana_program::account_info::next_account_info"],
				description: "Get Account",
				scope: "expr",
			},
			"Transfer Native SOL": {
				prefix: ["__TransferNativeSOL"],
				body: [
					"invoke(",
					"    &transfer(${1:sender}_info.key, ${2:receiver}_info.key, ${3:amount}),",
					"    &[",
					"        ${1:sender}_info.clone(),",
					"        ${2:receiver}_info.clone(),",
					"        ${4:system_program}_info.clone(),",
					"    ],",
					")?;",
				],
				requires: [
					"solana_program::program::invoke",
					"solana_program::system_instruction::transfer",
				],
				description: "Transfer Native SOL",
				scope: "expr",
			},
			"Get Rent Sysvar": {
				prefix: ["__GetRentSysvar"],
				body: ["let ${1:rent} = Rent::get()?;"],
				requires: [
					"solana_program::sysvar::rent::Rent",
					"solana_program::sysvar::Sysvar",
				],
				description: "Get Rent Sysvar",
				scope: "expr",
			},
			"Unpack Account": {
				prefix: ["__UnpackAccount"],
				body: [
					"let mut ${1:account} = ${2:Account}::unpack(&${1:account}_info.data.borrow())?;",
				],
				requires: [
					"crate::state::__Account__",
					"solana_program::account_info::next_account_info",
					"solana_program::program_pack::Pack",
				],
				description: "Unpack Account",
				scope: "expr",
			},
			"Check Rent Exempt": {
				prefix: ["__CheckRentExempt"],
				body: [
					"if !rent.is_exempt(${1:account}_info.lamports(), ${2:Account}::LEN) {",
					"    return Err(ProgramError::InvalidAccountData.into());",
					"}",
				],
				requires: [
					"crate::state::__Account__",
					"solana_program::program_error::ProgramError",
					"solana_program::program_pack::Pack",
					"solana_program::sysvar::Sysvar",
				],
				description: "Check Rent Exempt",
				scope: "expr",
			},
			"Get Accounts Iterator": {
				prefix: ["__GetAccountsIterator"],
				body: [
					"let account_info_iter = &mut accounts.iter();",
					"let ${1:account}_info = next_account_info(account_info_iter)?;",
				],
				requires: ["solana_program::account_info::next_account_info"],
				description: "Get Accounts Iterator",
				scope: "expr",
			},
			"Get Funded Keypair": {
				prefix: ["__GetFundedKeypair"],
				body: [
					"let ${1:keypair} = Keypair::new();",
					"let amount = 1_000_000_000;",
					"",
					"let tx = Transaction::new_signed_with_payer(",
					"    &[system_instruction::transfer(",
					"        &context.payer.pubkey(),",
					"        &${1:keypair}.pubkey(),",
					"        amount,",
					"    )],",
					"    Some(&context.payer.pubkey()),",
					"    &[&context.payer],",
					"    context.last_blockhash,",
					");",
					"",
					"context.banks_client.process_transaction(tx).await.unwrap();",
				],
				requires: [
					"solana_program::system_instruction",
					"solana_program_test::ProgramTestContext",
					"solana_program_test::BanksClientError",
					"solana_sdk::signature::Keypair",
					"solana_sdk::signer::Signer",
					"solana_sdk::transaction::Transaction",
				],
				description: "Get Funded Keypair",
				scope: "expr",
			},
			"Clone Keypair": {
				prefix: ["__CloneKeypair"],
				body: [
					"let ${1:cloned_keypair} = Keypair::from_bytes(&keypair.to_bytes()).unwrap();",
				],
				requires: ["solana_sdk::signature::Keypair"],
				description: "Clone Keypair",
				scope: "expr",
			},
			"Create Account": {
				prefix: ["__CreateAccount"],
				body: [
					"let rent = context.banks_client.get_rent().await.unwrap();",
					"let lamports = rent.minimum_balance(${1:len});",
					"",
					"let tx = Transaction::new_signed_with_payer(",
					"    &[system_instruction::create_account(",
					"        &context.payer.pubkey(),",
					"        &${2:account}.pubkey(),",
					"        lamports,",
					"        ${1:len} as u64,",
					"        ${3:owner},",
					"    )],",
					"    Some(&context.payer.pubkey()),",
					"    &[&context.payer, &${2:account}],",
					"    context.last_blockhash,",
					");",
					"",
					"context.banks_client.process_transaction(tx).await.unwrap();",
				],
				requires: [
					"solana_program_test::ProgramTestContext",
					"solana_program_test::BanksClientError",
					"solana_sdk::pubkey::Pubkey",
					"solana_sdk::signature::Keypair",
					"solana_sdk::signer::Signer",
					"solana_sdk::system_instruction",
					"solana_sdk::transaction::Transaction",
				],
				description: "Create Account",
				scope: "expr",
			},
			"Get Account Data": {
				prefix: ["__GetAccountData"],
				body: [
					"let ${1:account_data} = context",
					"    .banks_client",
					"    .get_account(*${2:pubkey})",
					"    .await",
					'    .expect("account not found")',
					'    .expect("account empty");',
				],
				requires: [
					"solana_program_test::ProgramTestContext",
					"solana_sdk::pubkey::Pubkey",
					"solana_sdk::account::Account",
				],
				description: "Get Account Data",
				scope: "expr",
			},
			Airdrop: {
				prefix: ["__Airdrop"],
				body: [
					"let tx = Transaction::new_signed_with_payer(",
					"    &[system_instruction::transfer(",
					"        &context.payer.pubkey(),",
					"        ${1:receiver},",
					"        ${2:amount},",
					"    )],",
					"    Some(&context.payer.pubkey()),",
					"    &[&context.payer],",
					"    context.last_blockhash,",
					");",
					"",
					"context.banks_client.process_transaction(tx).await.unwrap();",
				],
				requires: [
					"solana_program_test::ProgramTestContext",
					"solana_program_test::BanksClientError",
					"solana_sdk::pubkey::Pubkey",
					"solana_sdk::signer::Signer",
					"solana_sdk::system_instruction",
					"solana_sdk::transaction::Transaction",
				],
				description: "Airdrop",
				scope: "expr",
			},
			"Transfer Lamports": {
				prefix: ["__TransferLamports"],
				body: [
					"let tx = Transaction::new_signed_with_payer(",
					"    &[system_instruction::transfer(&${1:from}.pubkey(), ${2:to}, ${3:amount})],",
					"    Some(&${1:from}.pubkey()),",
					"    &[${1:from}],",
					"    context.last_blockhash,",
					");",
					"",
					"context.banks_client.process_transaction(tx).await?;",
				],
				requires: [
					"solana_program_test::ProgramTestContext",
					"solana_program_test::BanksClientError",
					"solana_sdk::pubkey::Pubkey",
					"solana_sdk::signature::Keypair",
					"solana_sdk::signer::Signer",
					"solana_sdk::system_instruction",
					"solana_sdk::transaction::Transaction",
				],
				description: "Transfer Lamports",
				scope: "expr",
			},
		},
	},
	objectSettings: {
		[forLanguages("solidity")]: {
			"editor.insertSpaces": true,
			"files.trimTrailingWhitespace": true,
		},
	},
	arraySettings: {},
};

export const web: SettingsChunk = {
	basicSettings: {},
	objectSettings: {
		[forLanguages(
			"html",
			"vue",
			"css",
			"scss",
			"javascript",
			"typescript",
			"javascriptreact",
			"typescriptreact"
		)]: {
			"editor.tabSize": 2,
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
		[forLanguages("json", "jsonc")]: {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
		},
		[forLanguages("php")]: {
			"editor.tabSize": 2,
		},
	},
	arraySettings: {},
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
			"editor.formatOnSave": true,
		},
		[forLanguages("css", "scss")]: {
			"editor.formatOnSave": true,
		},
		[forLanguages(
			"javascript",
			"typescript",
			"javascriptreact",
			"typescriptreact"
		)]: {
			"editor.formatOnSave": true,
			"editor.codeActionsOnSave": {
				"source.organizeImports": "explicit",
			},
		},
		[forLanguages("php")]: {
			"files.trimTrailingWhitespace": true,
		},
	},
	arraySettings: {},
};

// ===== OS-SPECIFIC =====

export const macos: SettingsChunk = {
	basicSettings: {},
	objectSettings: {},
	arraySettings: {},
};

export const linux: SettingsChunk = {
	basicSettings: {
		// ===== BEHAVIOR =====
		"files.hotExit": "onExitAndWindowClose",
		"window.restoreWindows": "preserve",
		"update.mode": "manual",

		// ===== VISUAL =====
		"terminal.integrated.fontSize": 13,

		// ===== EXTENSIONS =====
		"github.gitAuthentication": false,
	},
	objectSettings: {},
	arraySettings: {},
};

export const windows: SettingsChunk = {
	basicSettings: {},
	objectSettings: {},
	arraySettings: {},
};

// ===== LANGUAGE-SPECIFIC =====

export const python: SettingsChunk = {
	basicSettings: {
		"python.analysis.completeFunctionParens": true,
		"python.analysis.autoImportCompletions": true,
	},
	objectSettings: {
		[forLanguages("python")]: {
			"files.trimTrailingWhitespace": true,
			"files.trimFinalNewlines": true,
			"files.insertFinalNewline": true,

			"editor.insertSpaces": true,

			// "editor.formatOnSave": true,
			"editor.formatOnType": true,
		},
	},
	arraySettings: {},
};
