$profileName = "$($args[0])"
$vscodeUserDir = "$($args[1])"

# echo "dotfiles dir: '$dotfilesDir'"
# echo "profile name: '$profileName'"
# echo "vscode user dir: '$vscodeUserDir'"

Rename-Item -Path "$vscodeUserDir/settings.json" -NewName "settings.json.old"
New-Item -ItemType SymbolicLink -Path "$vscodeUserDir/settings.json" -Target "$dotfilesDir/vscode/profiles/dist/$profileName/settings.json"

Rename-Item -Path "$vscodeUserDir/keybindings.json" -NewName "keybindings.json.old"
New-Item -ItemType SymbolicLink -Path "$vscodeUserDir/keybindings.json" -Target "$dotfilesDir/vscode/profiles/dist/$profileName/keybindings.json"

Rename-Item -Path "$vscodeUserDir/snippets" -NewName "snippets.old"
New-Item -ItemType SymbolicLink -Path "$vscodeUserDir/snippets" -Target "$dotfilesDir/vscode/profiles/dist/$profileName/snippets"
