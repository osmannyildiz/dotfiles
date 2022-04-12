source $DOTFILES_DIR/bash/variables.bashrc
source $DOTFILES_DIR/bash/options.bashrc
source $DOTFILES_DIR/bash/aliases.bashrc
if [ -f $DOTFILES_DIR/bash/secret.bashrc ]; then
	source $DOTFILES_DIR/bash/secret.bashrc
fi
source $DOTFILES_DIR/bash/welcome.bashrc
