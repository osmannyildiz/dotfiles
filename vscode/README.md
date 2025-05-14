# dotfiles/vscode

## Link profiles

1. Create a new profile from within VSCode.
2. Learn that new profile's profile ID.
3. Run the commands below **with relevant values**.

For macOS:

```sh
VSCODE_USER_DIR="$HOME/Library/Application Support/Code/User"

# User dir path
./link_app_settings.sh $VSCODE_USER_DIR

# User dir path, profile name, profile ID
./link_profile.sh $VSCODE_USER_DIR Main_macos "-1ee7c0de"
```

For Ubuntu:

```sh
VSCODE_USER_DIR="$HOME/.config/Code/User"

# User dir path
./link_app_settings.sh $VSCODE_USER_DIR

# User dir path, profile name, profile ID
./link_profile.sh $VSCODE_USER_DIR Main_linux "-1ee7c0de"
```

For PowerShell on Windows (TODO):

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

Install all extensions at once like a true `e1ee7 h@x0r`:

```sh
# Profile name, extensions file path
./install_extensions.sh Main profiles/dist/Main_linux/extensions.txt
```
