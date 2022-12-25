#!/bin/bash

DOTFILES_PATH="$HOME/caylak/dotfiles"
VSCODE_USER_PATH="$HOME/.config/Code/User"

mv $VSCODE_USER_PATH/settings.json $VSCODE_USER_PATH/settings.json.old
ln -s $DOTFILES_PATH/vscode/settings/dist/settings.json $VSCODE_USER_PATH/settings.json

mv $VSCODE_USER_PATH/keybindings.json $VSCODE_USER_PATH/keybindings.json.old
ln -s $DOTFILES_PATH/vscode/keybindings/dist/keybindings.json $VSCODE_USER_PATH/keybindings.json

mv $VSCODE_USER_PATH/snippets $VSCODE_USER_PATH/snippets.old
ln -s $DOTFILES_PATH/vscode/snippets $VSCODE_USER_PATH/snippets

