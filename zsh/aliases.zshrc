alias q='exit'
alias l='ls -AC'
alias ll='ls -Alh'
alias cls='clear'
alias csum='sha256sum'
alias c.='code . && exit'

## Print local IP
alias lip='ifconfig $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=  netmask)"'
# alias lip='ip -4 -o address show dev $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=/\d{1,2})"'

## Git-related aliases
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
