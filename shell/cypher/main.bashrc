#
###		+--------------------------+
#####	|  MY SHELL PROFILE BEGIN  |
###		+--------------------------+
#


##### VARIABLES BEGIN #####

### Environment Variables

export EDITOR=micro

### PATH Additions

### Shell Variables

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
PROMPT_DIRTRIM=5

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
# PROMPT_COMMAND='history -a'
export PROMPT_COMMAND="${PROMPT_COMMAND:+$PROMPT_COMMAND ;} history -a" # See: https://github.com/wting/autojump?tab=readme-ov-file#known-issues

# Huge history. Doesn't appear to slow things down, so why not?
HISTSIZE=500000
HISTFILESIZE=100000

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

alias dotf='source ~/.bashrc'

alias q='exit'

alias cls='clear'

alias p='ping google.com -c 100'

alias l='ls -AC --group-directories-first'
alias ll='ls -Alh --group-directories-first'

mkcd() { mkdir $1 && cd $1; }

alias csum='sha256sum'
csum-txt() { csum $1 > $1.sha256sum.txt; }

alias mux='tmuxinator'

alias httpie='http -v --follow'

alias b='batcat'
alias bp='batcat --paging=always'

run-bg() { nohup "$@" > /dev/null 2>&1 & }

# Git-related aliases
alias gcl="git clone"
alias gl="git log"
alias gla="git log --graph --all"
alias gs="git status"
alias gi="git init"
alias ga="git add"
alias ga.="git add ."
alias gc="git commit"
alias gcm="git commit -m"
alias gf="git fetch"
alias gfa="git fetch --all"
alias gps="git push"
alias gpsuom="git push -u origin main"
alias gpl="git pull"
alias gup="git fetch --all && git pull"
alias gco="git checkout"
alias gb="git branch"
alias gr="git remote"
alias gra="git remote add"
alias grao="git remote add origin"
alias gd="git diff"
alias gdc="git diff --cached"
alias gst="git stash"

##### ALIASES END #####


##### PROMPT BEGIN #####

ORANGE="\[\e[38;5;208m\]"
CLEAR="\[\e[0m\]"
PS1="\n☢️ ${ORANGE}\u@\h${CLEAR} : ${ORANGE}\w${CLEAR}\n \$ "

##### PROMPT END #####


#
###		+------------------------+
#####	|  MY SHELL PROFILE END  |
###		+------------------------+
#
