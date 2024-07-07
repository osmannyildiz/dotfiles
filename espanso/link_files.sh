ESPANSO_DIR="$HOME/Library/Application Support/espanso"

mv "$ESPANSO_DIR/config" "$ESPANSO_DIR/config.old"
ln -s "$DOTFILES_DIR/espanso/config" "$ESPANSO_DIR/config"

mv "$ESPANSO_DIR/match" "$ESPANSO_DIR/match.old"
ln -s "$DOTFILES_DIR/espanso/match" "$ESPANSO_DIR/match"
