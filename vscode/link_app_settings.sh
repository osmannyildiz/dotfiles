VSCODE_USER_DIR="$1"

# App settings
mv "$VSCODE_USER_DIR/settings.json" "$VSCODE_USER_DIR/settings.json.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/appSettings.json" "$VSCODE_USER_DIR/settings.json"
