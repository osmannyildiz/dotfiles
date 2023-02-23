# dotfiles/shell

Append the given snippet to the existing shell config, so that the environment-specific defaults will be preserved.

For the profile "(bash) personal linux", add this to the `.bashrc`:
```bash
#
###
#####
DOTFILES_DIR="$HOME/aa/dotfiles"
DOTFILES_SHELL_PROFILE="(bash) personal linux"
source "$DOTFILES_DIR/shell/$DOTFILES_SHELL_PROFILE/main.bashrc"
#####
###
#
```

