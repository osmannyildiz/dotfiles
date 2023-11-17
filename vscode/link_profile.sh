PROFILE_NAME="$1"
VSCODE_USER_DIR="$2"

# echo "dotfiles dir: '$DOTFILES_DIR'"
# echo "profile name: '$PROFILE_NAME'"
# echo "vscode user dir: '$VSCODE_USER_DIR'"

mv "$VSCODE_USER_DIR/settings.json" "$VSCODE_USER_DIR/settings.json.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/settings.json" "$VSCODE_USER_DIR/settings.json"

mv "$VSCODE_USER_DIR/keybindings.json" "$VSCODE_USER_DIR/keybindings.json.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/keybindings.json" "$VSCODE_USER_DIR/keybindings.json"

mv "$VSCODE_USER_DIR/snippets" "$VSCODE_USER_DIR/snippets.old"
ln -s "$DOTFILES_DIR/vscode/profiles/dist/$PROFILE_NAME/snippets" "$VSCODE_USER_DIR/snippets"
