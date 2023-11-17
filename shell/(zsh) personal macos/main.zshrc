#
###		+--------------------------+
#####	|  MY SHELL PROFILE BEGIN  |
###		+--------------------------+
#


##### SECRETS BEGIN #####

if [ -f "$DOTFILES_DIR/local/secrets.zshrc" ]; then
	source "$DOTFILES_DIR/local/secrets.zshrc"
fi

##### SECRETS END #####


##### VARIABLES BEGIN #####

### Environment Variables

export MY_PYTHON_HOME="$HOME/portakal/code/python"

### Shell Variables

LIP_INTERFACE=en0

##### VARIABLES END #####


##### OPTIONS BEGIN #####

##### OPTIONS END #####


##### ALIASES BEGIN #####

alias q='exit'
alias l='ls -AC'
alias ll='ls -Alh'
alias cls='clear'
alias csum='sha256sum'
csum-txt() { sha256sum $1 > $1.sha256sum.txt; }
alias c.='codium . && exit'
alias vsc.='code . && exit'

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
alias gco="git checkout"
alias gb="git branch"
alias gr="git remote"
alias gd="git diff"
alias gdc="git diff --cached"

# Aliases related to my server
alias myserver="ssh $MYSERVER_USER_MYUSER@$MYSERVER_HOST -p $MYSERVER_PORT -i $MYSERVER_PRIVKEY_MYUSER"
alias myserver-git="ssh $MYSERVER_USER_GIT@$MYSERVER_HOST -p $MYSERVER_PORT"
gcl-myserver() { git clone ssh://$MYSERVER_USER_GIT@$MYSERVER_HOST:$MYSERVER_PORT/~/repos/$1.git; }
gra-myserver() { git remote add myserver ssh://$MYSERVER_USER_GIT@$MYSERVER_HOST:$MYSERVER_PORT/~/repos/$1.git; }

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
