CUDATEXT_SETTINGS_DIR="$HOME/Library/Application Support/CudaText/settings"

mv "$CUDATEXT_SETTINGS_DIR/user.json" "$CUDATEXT_SETTINGS_DIR/user.json.old"
ln -s $DOTFILES_DIR/cudatext/user.json "$CUDATEXT_SETTINGS_DIR/user.json"
