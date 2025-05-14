#
###		+--------------------------+
#####	|  MY SHELL PROFILE BEGIN  |
###		+--------------------------+
#


if [ -f "$DOTFILES_DIR/_private/shell/pre.zshrc" ]; then
	source "$DOTFILES_DIR/_private/shell/pre.zshrc"
fi


##### TODO BEGIN #####

# For React Native
export JAVA_HOME=`/usr/libexec/java_home -v 17`
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools

##### TODO END #####


##### VARIABLES BEGIN #####

### Environment Variables

export EDITOR=/opt/homebrew/bin/micro

export MY_PYTHON_HOME="$HOME/aa/code/python"
export PYTHONPATH="$MY_PYTHON_HOME"
export PYTHONSTARTUP="$DOTFILES_DIR/python/pythonstartup.py"

### PATH Additions

export PATH="/opt/homebrew/opt/gnu-tar/libexec/gnubin:$PATH"

### Shell Variables

LIP_INTERFACE=en0

##### VARIABLES END #####


##### OPTIONS BEGIN #####

setopt AUTO_CD

##### OPTIONS END #####


##### ALIASES BEGIN #####

alias q='exit'

alias cls='clear'

alias p='ping google.com -c 100'

alias l='ls -AFG'
alias ll='ls -AFGlh'

mkcd() { mkdir $1 && cd $1; }

alias csum='sha256sum'
csum-txt() { csum $1 > $1.sha256sum.txt; }

alias mux='tmuxinator'

alias httpie='http -v --follow'

alias b='bat'
alias bp='bat --paging=always'

# TODO run-bg

pgbin() { /opt/homebrew/opt/postgresql@15/bin/$1; }

alias fx='open .'
alias ff='/Applications/Firefox.app/Contents/MacOS/firefox -P > /dev/null'

alias c.='code .'
alias cq='code . && exit'
alias z.='zed .'
alias zq='zed . && exit'
alias cu.='cursor .'
alias cuq='cursor . && exit'

# Print local IP
alias lip='ifconfig $LIP_INTERFACE | ggrep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?= netmask)"'
#alias lip='ip -4 -o address show dev $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=/\d{1,2})"'

# Git-related aliases
alias gcl="git clone"
alias gl="git log"
alias gs="git status"
alias gi="git init"
alias ga="git add"
alias ga.="git add ."
alias gc="git commit"
alias gcm="git commit -m"
alias gf="git fetch"
alias gfa="git fetch --all"
alias gps="git push"
alias gpl="git pull"
alias gup="git fetch --all && git pull"
alias gco="git checkout"
alias gb="git branch"
alias gr="git remote"
alias gra="git remote add"
alias gd="git diff"
alias gdc="git diff --cached"
alias gst="git stash"

# https://superuser.com/a/1559424
alias git-undo-chmod="git diff -p | grep -E '^(diff|old mode|new mode)' | sed -e 's/^old/NEW/;s/^new/old/;s/^NEW/new/' | git apply"
# TODO Test and implement for Bash

# Python-related aliases
alias seba='source env/bin/activate'
alias deac='deactivate'
alias py-init='python -m venv env && seba'
py-new() { mkcd $1 && py-init; }
alias pip-i='pip install -r requirements.txt'
pip-add() { pip install $@ && printf "%s\n" $@ >> requirements.txt; }
alias py-srv='python -m http.server --bind localhost'
alias py-srv-public='echo -n "Your local IP address is: "; lip; py-srv'
# py-run() {
# 	local SCRIPT_NAME=$1;
# 	shift;
# 	python "$MY_PYTHON_HOME/_run/$SCRIPT_NAME.py" $@;
# }

# Java-related aliases
alias jdk-list='/usr/libexec/java_home -V'
jdk-use() { export JAVA_HOME=$(/usr/libexec/java_home -v $1); }

# Solana-related aliases
alias scl='solana config set -ul' # Localnet
alias scd='solana config set -ud' # Devnet
alias stv='cd && solana-test-validator --reset'
alias sl='solana logs'
alias csd='npx create-solana-dapp'
alias ai='anchor init --template multiple'
alias ab='anchor build && anchor keys sync'
alias at='anchor test --skip-local-validator'
alias ad='anchor deploy --provider.cluster localnet'

##### ALIASES END #####


##### PROMPT BEGIN #####

PS1=$'
🐸 \e[32m%n@%m\e[0m : \e[32m%~\e[0m
 %% \e[0m'

##### PROMPT END #####


##### WELCOME BEGIN #####

# Art by Joan Stark
# https://www.asciiart.eu/buildings-and-places/cities
echo ""
echo -e "                           .|                                                   "
echo -e "                           | |                                                  "
echo -e "                           |'|            ._____                                "
echo -e "                   ___    |  |            |.   |' .---\"|                        "
echo -e "           _    .-'   '-. |  |     .--'|  ||   | _|    |                        "
echo -e "        .-'|  _.|  |    ||   '-__  |   |  |    ||      |                        "
echo -e "        |' | |.    |    ||       | |   |  |    ||      |                        "
echo -e "________|  '-'     '    \"\"       '-'   '-.'    '\`      |________________________"
echo -e "\e[34m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\e[0m"
echo -e "\e[34m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\e[0m"
echo -e "\e[34m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\e[0m"
echo -e "\e[34m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\e[0m"
echo ""

##### WELCOME END #####


if [ -f "$DOTFILES_DIR/_private/shell/post.zshrc" ]; then
	source "$DOTFILES_DIR/_private/shell/post.zshrc"
fi


#
###		+------------------------+
#####	|  MY SHELL PROFILE END  |
###		+------------------------+
#
