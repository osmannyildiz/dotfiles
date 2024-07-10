import type { ExtensionsChunk } from "../definitions";

// ===== GENERAL =====

export const base: ExtensionsChunk = [
	"vmsynkov.colonize", //                                   Colonize (by vmsynkov)
	"dotiful.dotfiles-syntax-highlighting", //                Dotfiles Syntax Highlighting (by Art Dev)
	"mitchdenny.ecdc", //                                     Encode Decode (by Mitch Denny)
	"irongeek.vscode-env", //                                 ENV (by Jakka Prihatna)
	"usernamehw.errorlens", //                                Error Lens (by Alexander)
	"tamasfe.even-better-toml", //                            Even Better TOML (by tamasfe)
	"eamodio.gitlens", //                                     GitLens (by GitKraken)
	"visualstudioexptteam.vscodeintellicode", //              IntelliCode (by Microsoft)
	"visualstudioexptteam.intellicode-api-usage-examples", // IntelliCode API Usage Examples (by Microsoft)
	"visualstudioexptteam.vscodeintellicode-completions", //  IntelliCode Completions (by Microsoft)
	"nickdemayo.vscode-json-editor", //                       Json Editor (by Nick DeMayo)
	"ms-vsliveshare.vsliveshare", //                          Live Share (by Microsoft)
	"jobe451.lorem-whatever", //                              Lorem Whatever (by Daniel Keller)
	"davidanson.vscode-markdownlint", //                      markdownlint (by David Anson)
	"mechatroner.rainbow-csv", //                             Rainbow CSV (by mechatroner)
	"redhat.fabric8-analytics", //                            Red Hat Dependency Analytics (by Red Hat)
	"rioj7.vscode-remove-comments", //                        Remove Comments (by rioj7)
	"usernamehw.remove-empty-lines", //                       Remove empty lines (by Alexander)
	// "irishbruse.smartersemicolon", //                         Smarter Semicolon (by Ethan Conneely)
	"tyriar.sort-lines", //                                   Sort lines (by Daniel Imms)
	"espresso3389.vscode-hasher-extended", //                 vscode-hasher-extended (by espresso3389)
	"jrebocho.vscode-random", //                              vscode-random (by Jorge Rebocho)
	"redhat.vscode-xml", //                                   XML (by Red Hat)
	"redhat.vscode-yaml", //                                  YAML (by Red Hat)
];

export const basePlus: ExtensionsChunk = [
	"mrmlnc.vscode-apache", //                                Apache Conf (by mrmlnc)
	"eiminsasete.apacheconf-snippets", //                     Apache Conf Snippets (by hrdtbs)
	// "formulahendry.code-runner", //                           Code Runner (by Jun Han)
	"streetsidesoftware.code-spell-checker", //               Code Spell Checker (by Street Side Software)
	"vadimcn.vscode-lldb", //                                 CodeLLDB (by Vadim Chugunov)
	"sj0000e.hexdiff", //                                     hexdiff (by sj0000e)
	"ms-vscode.makefile-tools", //                            Makefile Tools (by Microsoft)
	"mongodb.mongodb-vscode", //                              MongoDB for VS Code (by MongoDB)
	"ahmadalli.vscode-nginx-conf", //                         NGINX Configuration Language Support (by ahmadalli)
	// "hoovercj.vscode-power-mode", //                          Power Mode (by Cody Hoover)
	"mtxr.sqltools", //                                       SQLTools (by Matheus Teixeira)
	"hangxingliu.vscode-systemd-support", //                  Systemd Helper (by Liu Yue)
	// "tabnine.tabnine-vscode", //                              Tabnine AI (by TabNine)
	"bmuskalla.vscode-tldr", //                               tl;dr pages (by Benjamin Muskalla)
	// "zxh404.vscode-proto3", //                                vscode-proto3 (by zxh404)
];

export const work: ExtensionsChunk = [
	"johnpapa.vscode-peacock", //                             Peacock (by John Papa)
];

export const web3: ExtensionsChunk = [
	"dfinity-foundation.vscode-motoko", //                    Motoko (by DFINITY Foundation)
	"damirka.move-syntax", //                                 Move syntax (by Damir Shamanaev)
	"patriciobcs.solana-snippets", //                         Solana Snippets (by patriciobcs)
	"nomicfoundation.hardhat-solidity", //                    Solidity (by Nomic Foundation)
];

export const themes: ExtensionsChunk = [
	"daltonmenezes.aura-theme", //                            Aura Theme (by Dalton Menezes)
	"teabyii.ayu", //                                         Ayu (by teabyii)
	"dracula-theme.theme-dracula", //                         Dracula Official (by Dracula Theme)
	"github.github-vscode-theme", //                          GitHub Theme (by GitHub)
	"74th.monokai-charcoal-high-contrast", //                 Monokai Charcoal high contrast
	"tinkertrain.theme-panda", //                             Panda Theme (by Panda Theme)
	"tyriar.theme-sapphire", //                               Sapphire Theme (by Daniel Imms)
];

export const themesPlus: ExtensionsChunk = [
	"zehfernando.theme-actual-obsidian", //                   (Actual) Obsidian (by Zeh Fernando)
	"beardedbear.beardedtheme", //                            Bearded Theme (by BeardedBear)
	"connor4312.codesong", //                                 codesong (by Connor Peet)
	// "equinusocio.vsc-community-material-theme", //            Community Material Theme (by Equinusocio)
	"karyfoundation.theme-karyfoundation-themes", //          Kary Pro Colors (by Pouya Kary)
	"pkief.material-icon-theme", //                           Material Icon Theme (by Philipp Kief)
	// "equinusocio.vsc-material-theme", //                      Material Theme (by Equinusocio)
	"equinusocio.moxer-icons", //                             Moxer Icons (by Equinusocio)
	"equinusocio.moxer-theme", //                             Moxer Theme (by Equinusocio)
	"gonnadostuff.njdark", //                                 NJDark (by GonnaDoStuff)
	"zhuangtongfa.material-theme", //                         One Dark Pro (by binaryify)
	"hedinne.popping-and-locking-vscode", //                  Popping and Locking Theme (by .hedinne)
	"enkia.tokyo-night", //                                   Tokyo Night (by enkia)
];

export const web: ExtensionsChunk = [
	"formulahendry.auto-close-tag", //                        Auto Close Tag (by Jun Han)
	"formulahendry.auto-rename-tag", //                       Auto Rename Tag (by Jun Han)
	"torresgol10.bootstrap-class-autocomplete", //            Bootstrap Class Autocomplete (by torresgol10)
	"solnurkarim.html-to-css-autocompletion", //              HTML to CSS autocompletion (by solnurkarim)
	"jacobzwang.http-status-code-index", //                   Http Status Code Index (by Jacob Zwang)
	"esbenp.prettier-vscode", //                              Prettier (by Prettier)
	"syler.sass-indented", //                                 Sass (by Syler)
	"sibiraj-s.vscode-scss-formatter", //                     SCSS Formatter (by Sibiraj)
];

export const webPlus: ExtensionsChunk = [
	// "ms-vscode.live-server", //                               Live Preview (by Microsoft)
	"ritwickdey.liveserver", //                               Live Server (by Ritwick Dey)
	"josee9988.minifyall", //                                 MinifyAll (by Jose Gracia Berenguer)
	"bradlc.vscode-tailwindcss", //                           Tailwind CSS IntelliSense (by Tailwind Labs)
];

export const js: ExtensionsChunk = [
	"steoates.autoimport", //                                 Auto Import (by steoates)
	"tobermory.es6-string-html", //                           es6-string-html (by Tobermory)
	"dsznajder.es7-react-js-snippets", //                     ES7+ React/Redux/React-Native snippets (by dsznajder)
	"dbaeumer.vscode-eslint", //                              ESLint (by Microsoft)
	"wix.vscode-import-cost", //                              Import Cost (by Wix)
	"xabikos.javascriptsnippets", //                          JavaScript (ES6) code snippets (by charalampos karypidis)
	"christian-kohler.path-intellisense", //                  Path Intellisense (by Christian Kohler)
	"yoavbls.pretty-ts-errors", //                            Pretty TypeScript Errors (by yoavbis)
];

export const docker: ExtensionsChunk = [
	// "jeff-hykin.better-dockerfile-syntax", //                 Better DockerFile Syntax (by Jeff Hykin)
	"ms-azuretools.vscode-docker", //                         Docker (by Microsoft)
	// "marquesmps.dockerfile-validator", //                     dockerfile-validator (by marquesmps)
	// "ms-kubernetes-tools.vscode-kubernetes-tools", //         Kubernetes (by Microsoft)
];

// ===== OS-SPECIFIC =====

export const macos: ExtensionsChunk = [
	"idleberg.applescript", //                                AppleScript (by idleberg)
];

export const windows: ExtensionsChunk = [];

// ===== LANGUAGE-SPECIFIC =====

export const cpp: ExtensionsChunk = [
	"ms-vscode.cpptools", //                                  C/C++ (by Microsoft)
];

export const csharp: ExtensionsChunk = [
	"ms-dotnettools.csharp", //                               C# (by Microsoft)
];

export const flutter: ExtensionsChunk = [
	"nash.awesome-flutter-snippets", //                       Awesome Flutter Snippets (by Neevash Ramdial (Nash))
	"dart-code.dart-code", //                                 Dart (by Dart Code)
	"dart-code.flutter", //                                   Flutter (by Dart Code)
];

export const go: ExtensionsChunk = [
	"golang.go", //                                           Go (by Go Team at Google)
];

export const java: ExtensionsChunk = [
	"vscjava.vscode-java-debug", //                           Debugger for Java (by Microsoft)
	"redhat.java", //                                         Language Support for Java(TM) (by Red Hat)
	"vscjava.vscode-maven", //                                Maven for Java (by Microsoft)
	"vscjava.vscode-java-dependency", //                      Project Manager for Java (by Microsoft)
	"vscjava.vscode-java-test", //                            Test Runner for Java (by Microsoft)
];

export const php: ExtensionsChunk = [
	"devsense.composer-php-vscode", //                        Composer (by DEVSENSE)
	"devsense.intelli-php-vscode", //                         IntelliPHP (by DEVSENSE)
	"shufo.vscode-blade-formatter", //                        Laravel Blade formatter (by Shuhei Hayashibara)
	"onecentlin.laravel-blade", //                            Laravel Blade Snippets (by Winnie Lin)
	"ihunte.laravel-blade-wrapper", //                        Laravel Blade Wrapper (by IHunte)
	"amiralizadeh9480.laravel-extra-intellisense", //         Laravel Extra Intellisense (by amir)
	"codingyu.laravel-goto-view", //                          Laravel goto view (by codingyu)
	"onecentlin.laravel5-snippets", //                        Laravel Snippets (by Winnie Lin)
	"devsense.phptools-vscode", //                            PHP (by DEVSENSE)
	"pwarchol.vscode-php-file-link", //                       PHP File Link (by Pawel Warchol)
	"bmewburn.vscode-intelephense-client", //                 PHP Intelephense (by Ben Mewburn)
	"zobo.php-intellisense", //                               PHP IntelliSense (by Damjan Cvetko)
	"devsense.profiler-php-vscode", //                        PHP Profiler (by DEVSENSE)
];

export const processing: ExtensionsChunk = [
	"luke-zhang-04.processing-vscode", //                     Processing VSCode (by Luke-zhang-04)
];

export const python: ExtensionsChunk = [
	"samuelcolvin.jinjahtml", //                              Better Jinja (by Samuel Colvin)
	"cstrap.flask-snippets", //                               flask-snippets (by cstrap)
	"ms-python.isort", //                                     isort (by Microsoft)
	"ms-toolsai.jupyter", //                                  Jupyter (by Microsoft) (pack)
	"ms-toolsai.vscode-jupyter-cell-tags", //                 Jupyter Cell Tags (by Microsoft)
	"ms-toolsai.jupyter-keymap", //                           Jupyter Keymap (by Microsoft)
	"ms-toolsai.jupyter-renderers", //                        Jupyter Notebook Renderers (by Microsoft)
	"ms-toolsai.vscode-jupyter-slideshow", //                 Jupyter Slide Show (by Microsoft)
	"ms-python.vscode-pylance", //                            Pylance (by Microsoft)
	"ms-python.python", //                                    Python (by Microsoft)
];

export const rust: ExtensionsChunk = [
	"rust-lang.rust-analyzer", //                             rust-analyzer (by The Rust Programming Language)
];

export const svelte: ExtensionsChunk = [
	"svelte.svelte-vscode", //                                Svelte for VS Code (by Svelte)
];

export const swift: ExtensionsChunk = [
	"sswg.swift-lang", //                                     Swift (by Swift Server Work Group)
];

export const vue: ExtensionsChunk = [
	"vue.volar", //                                           Vue - Official (by Vue)
	"wscats.vue", //                                          Vue 3 Support - All In One (by Eno Yao)
	"sdras.vue-vscode-snippets", //                           Vue VSCode Snippets (by sarah.drasner)
];
