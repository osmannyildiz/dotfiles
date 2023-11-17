#
###		+--------------------------+
#####	|  MY SHELL PROFILE BEGIN  |
###		+--------------------------+
#


##### SECRETS BEGIN #####

if [ -f "$DOTFILES_DIR/local/secrets.bashrc" ]; then
	source "$DOTFILES_DIR/local/secrets.bashrc"
fi

##### SECRETS END #####


##### VARIABLES BEGIN #####

### Environment Variables

export PATH="$HOME/caylak/program_files/exiftool:$HOME/caylak/program_files/geckodriver-v0.30.0:$HOME/.local/share/solana/install/active_release/bin:$HOME/caylak/program_files/swift-5.7.1-RELEASE-ubuntu20.04/usr/bin:$PATH"
export MY_PYTHON_HOME="$HOME/caylak/code/python"

### Shell Variables

LIP_INTERFACE=wlp0s20f3

##### VARIABLES END #####


##### OPTIONS BEGIN #####

# Resources:
# - https://github.com/mrzool/bash-sensible

### General Options

# Prevent file overwrite on stdout redirection (Use `>|` to force redirection to an existing file)
set -o noclobber

# Update window size after every command
# (Linux Mint default) Check the window size after each command and, if necessary, update the values of LINES and COLUMNS
shopt -s checkwinsize

# Automatically trim long paths in the prompt (requires Bash 4.x or newer)
# Also see: https://jichu4n.com/posts/shortening-paths-in-the-bash-prompt-with-prompt_dirtrim/
PROMPT_DIRTRIM=3

### Tab-Completion

# Perform file completion in a case insensitive fashion
bind "set completion-ignore-case on"

# Treat hyphens and underscores as equivalent
bind "set completion-map-case on"

# Immediately add a trailing slash when autocompleting symlinks to directories
bind "set mark-symlinked-directories on"

### History

# (Linux Mint default) Append to the history file, don't overwrite it
shopt -s histappend

# Save multi-line commands as one command
shopt -s cmdhist

# Record each line as it gets issued
PROMPT_COMMAND='history -a'

# Huge history. Doesn't appear to slow things down, so why not?
HISTSIZE=500000
HISTFILESIZE=100000

# Avoid duplicate entries
# (Linux Mint default) Don't put duplicate lines or lines starting with space in the history
HISTCONTROL=ignoreboth

# Don't record some commands
export HISTIGNORE="&:[ ]*:exit:ls:bg:fg:history:clear"

# Use standard ISO 8601 timestamp
# %F equivalent to %Y-%m-%d
# %T equivalent to %H:%M:%S (24-hours format)
HISTTIMEFORMAT='%F %T '

# Enable incremental history search with up/down arrows (also Readline goodness)
# Also see: http://codeinthehole.com/writing/the-most-important-command-line-tip-incremental-history-searching-with-inputrc/
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'
bind '"\e[C": forward-char'
bind '"\e[D": backward-char'

### Directory Navigation

# Prepend cd to directory names automatically
shopt -s autocd 2> /dev/null

# Correct spelling errors during tab-completion
shopt -s dirspell 2> /dev/null

# Correct spelling errors in arguments supplied to cd
shopt -s cdspell 2> /dev/null

### Misc.

# (Linux Mint default) Make less more friendly for non-text input files
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

##### OPTIONS END #####


##### ALIASES BEGIN #####

alias q='exit'
alias l='ls -AC --group-directories-first'
alias ll='ls -Alh --group-directories-first'
alias cls='clear'
alias csum='sha256sum'
csum-txt() { sha256sum $1 > $1.sha256sum.txt; }
alias hib='systemctl hibernate'
alias wifidriver-on='sudo modprobe iwlwifi'
alias wifidriver-off='sudo modprobe -r iwlwifi'

alias apache-status='service apache2 status'
alias apache-start='sudo service apache2 start'
alias apache-stop='sudo service apache2 stop'
alias apache-reload='sudo service apache2 reload'
alias mysql-status='service mysql status'
alias mysql-start='sudo service mysql start'
alias mysql-stop='sudo service mysql stop'
alias mongo-status='service mongod status'
alias mongo-start='sudo service mongod start'
alias mongo-stop='sudo service mongod stop'
#alias docker-start='sudo systemctl start docker docker.socket containerd'
#alias docker-stop='sudo systemctl stop docker docker.socket containerd'
alias docker-status='systemctl --user status docker'
alias docker-start='systemctl --user start docker'
alias docker-stop='systemctl --user stop docker'

# Print local IP
alias lip='ifconfig $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=  netmask)"'
#alias lip='ip -4 -o address show dev $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=/\d{1,2})"'

alias c.='code . && exit'
alias httpie='http -v --follow'
#lvsrv() { live-server --no-browser --port="$1"; }  # Host is 0.0.0.0 by default

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

# Python-related aliases
alias py='python3.10'
#alias ptp='py -m ptpython'
alias py-pip='pip3.10'
py-pip-add() { py-pip install $@ && printf "%s\n" $@ >> requirements.txt; }
py-new() { mkdir $1 && cd $1 && py -m venv env && seba; }
alias seba='source env/bin/activate'
alias py-srv='py -m http.server --bind localhost'
alias py-srv-public='echo -n "Your local IP address is: "; lip; py -m http.server'
py-run() {
	local SCRIPT_NAME=$1;
	shift;
	py "$MY_PYTHON_HOME/_run/$SCRIPT_NAME.py" $@;
}

# Aliases related to my server
alias myserver="ssh $MYSERVER_USER_MYUSER@$MYSERVER_HOST -p $MYSERVER_PORT -i $MYSERVER_PRIVKEY_MYUSER"
alias myserver-git="ssh $MYSERVER_USER_GIT@$MYSERVER_HOST -p $MYSERVER_PORT"
gcl-myserver() { git clone ssh://$MYSERVER_USER_GIT@$MYSERVER_HOST:$MYSERVER_PORT/~/repos/$1.git; }
gra-myserver() { git remote add myserver ssh://$MYSERVER_USER_GIT@$MYSERVER_HOST:$MYSERVER_PORT/~/repos/$1.git; }

##### ALIASES END #####


##### PROMPT BEGIN #####

PS1='\n\u@\h : \w\n\$ '

##### PROMPT END #####


##### WELCOME BEGIN #####

# Based on art by Hayley Jane Wakenshaw
echo ""
echo "                           /)"
echo "                  /\___/\ (("
echo "                  \'0_0'/  ))"
echo "                  { :Y: }_//"
echo "----------------{_}'-^-'{_}-----------------------------------------------------"
echo ""

##### WELCOME END #####


#
###		+------------------------+
#####	|  MY SHELL PROFILE END  |
###		+------------------------+
#
