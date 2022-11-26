alias q='exit'
alias l='ls -AC --group-directories-first'
alias ll='ls -Alh --group-directories-first'
alias cls='clear'
alias csum='sha256sum'
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
# alias docker-start='sudo systemctl start docker docker.socket containerd'
# alias docker-stop='sudo systemctl stop docker docker.socket containerd'
alias docker-status='systemctl --user status docker'
alias docker-start='systemctl --user start docker'
alias docker-stop='systemctl --user stop docker'

## Print local IP
alias lip='ifconfig $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=  netmask)"'
# alias lip='ip -4 -o address show dev $LIP_INTERFACE | grep --color=never -Po "inet \K\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?=/\d{1,2})"'

alias c.='code . && exit'
alias httpie='http -v --follow'
# lvsrv() { live-server --no-browser --port="$1"; }  # Host is 0.0.0.0 by default

alias ssh-sunucu="ssh $SUNUCU_USER@$SUNUCU_HOST -p $SUNUCU_PORT"

## Python-related aliases
alias py='python3.10'
# alias ptp='py -m ptpython'
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

