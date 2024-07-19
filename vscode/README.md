# dotfiles/vscode

## Link profiles

1. Create a new profile from within VSCode.
2. Learn that new profile's profile ID and assign it to the `VSCODE_PROFILE_ID` shell variable, like shown below.
3. Run the commands below **with relevant values**.

For Bash:

```sh
$ VSCODE_PROFILE_ID="-1ee7c0de"
$ ./link_profile.sh Main_macos "$HOME/Library/Application Support/Code/User/profiles/$VSCODE_PROFILE_ID"
```

For PowerShell:

```powershell
# Run as administrator!
$dotfilesDir = "C:/aa/dotfiles"
$vscodeProfileId = "-1ee7c0de"
./link_profile.ps1 Main_windows "$env:APPDATA/Code/User/profiles/$vscodeProfileId"
```

## Extra

List installed extensions:

```sh
code --profile Main --list-extensions > extensions_Main.txt
```

Install an extension:

```sh
code --profile Main --install-extension bradlc.vscode-tailwindcss
```
