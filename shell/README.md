# dotfiles/shell

Append the given snippet to the existing shell config, so that the environment-specific defaults will be preserved.

For the profile "(bash) personal linux", add this to the `.bashrc`:

```sh
#
###
#####
export DOTFILES_DIR="$HOME/aa/dotfiles"
DOTFILES_SHELL_PROFILE="(bash) personal linux"
source "$DOTFILES_DIR/shell/$DOTFILES_SHELL_PROFILE/main.bashrc"
#####
###
#
```

For the profile "(zsh) personal macos", add this to the `.zshrc`:

```sh
#
###
#####
export DOTFILES_DIR="$HOME/aa/dotfiles"
DOTFILES_SHELL_PROFILE="(zsh) personal macos"
source "$DOTFILES_DIR/shell/$DOTFILES_SHELL_PROFILE/main.zshrc"
#####
###
#
```
