alias q='exit'
alias l='ls -AC --group-directories-first'
alias ll='ls -Alh --group-directories-first'
alias cls='clear'
alias csum='sha256sum'
alias hib='systemctl hibernate'

alias apache-status='sudo service apache2 status'
alias apache-start='sudo service apache2 start'
alias apache-stop='sudo service apache2 stop'
alias apache-reload='sudo service apache2 reload'
alias mysql-status='sudo service mysql status'
alias mysql-start='sudo service mysql start'
alias mysql-stop='sudo service mysql stop'

alias py='python3.10'
alias pypip='pip3.10'
alias ptp='py -m ptpython'

## Print local IP
alias lip='ifconfig $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=  netmask)"'
# alias lip='ip -4 -o address show dev $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=/\d{1,2})"'

alias c.='code . && exit'
alias httpie='http -v --follow'
alias pysrv='echo -n "Your local IP is: "; lip; python3 -m http.server'
# lvsrv() { live-server --no-browser --port="$1"; }  # Host is 0.0.0.0 by default

