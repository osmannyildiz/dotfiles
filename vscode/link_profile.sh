VSCODE_USER_DIR="$1"
PROFILE_NAME="$2"
VSCODE_PROFILE_ID="$3"

VSCODE_PROFILE_DIR="$VSCODE_USER_DIR/profiles/$VSCODE_PROFILE_ID"

# Profile settings
mv "$VSCODE_PROFILE_DIR/settings.json" "$VSCODE_PROFILE_DIR/settings.json.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/settings.json" "$VSCODE_PROFILE_DIR/settings.json"

# Keybindings
mv "$VSCODE_PROFILE_DIR/keybindings.json" "$VSCODE_PROFILE_DIR/keybindings.json.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/keybindings.json" "$VSCODE_PROFILE_DIR/keybindings.json"

# Snippets
mv "$VSCODE_PROFILE_DIR/snippets" "$VSCODE_PROFILE_DIR/snippets.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/snippets" "$VSCODE_PROFILE_DIR/snippets"
