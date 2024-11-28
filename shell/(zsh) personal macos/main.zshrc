#
###		+--------------------------+
#####	|  MY SHELL PROFILE BEGIN  |
###		+--------------------------+
#


##### TODO BEGIN #####

# For React Native
export JAVA_HOME=`/usr/libexec/java_home -v 17`

##### TODO END #####


##### SECRETS BEGIN #####

if [ -f "$DOTFILES_DIR/local/secrets.zshrc" ]; then
	source "$DOTFILES_DIR/local/secrets.zshrc"
fi

##### SECRETS END #####


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
csum-txt() { sha256sum $1 > $1.sha256sum.txt; }

alias c.='code .'
alias cq='code . && exit'

alias ff='/Applications/Firefox.app/Contents/MacOS/firefox -P > /dev/null'

alias mux='tmuxinator'

pgbin() { /opt/homebrew/opt/postgresql@15/bin/$1; }

# Print local IP
alias lip='ifconfig $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=  netmask)"'
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

##### ALIASES END #####


##### PROMPT BEGIN #####

PS1='
%n@%m : %~
%% '

##### PROMPT END #####


##### WELCOME BEGIN #####

# Art by Joan Stark
# https://www.asciiart.eu/buildings-and-places/cities
echo ""
echo "                           .|                                                   "
echo "                           | |                                                  "
echo "                           |'|            ._____                                "
echo "                   ___    |  |            |.   |' .---\"|                        "
echo "           _    .-'   '-. |  |     .--'|  ||   | _|    |                        "
echo "        .-'|  _.|  |    ||   '-__  |   |  |    ||      |                        "
echo "        |' | |.    |    ||       | |   |  |    ||      |                        "
echo "________|  '-'     '    \"\"       '-'   '-.'    '\`      |________________________"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo ""

##### WELCOME END #####


#
###		+------------------------+
#####	|  MY SHELL PROFILE END  |
###		+------------------------+
#
