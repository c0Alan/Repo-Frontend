#!/bin/bash

# 指定pm2启动环境
export HOME=~

# 脚本所在目录
HOME_PATH=`cd $(dirname $0); pwd`
cd $HOME_PATH/../
BASE_PATH=`pwd`
# 项目依赖包路径
dependencyPath="$BASE_PATH/node_modules.tar"
# 服务的路径
serverPath="$BASE_PATH/server"

# 服务启动文件
entry="pm2.config.js"


# 启动应用
if [[ $1 == "start" ]]
then
	# 清理依赖包，每次启动都拷贝一份新的
	if [ -d "$serverPath/node_modules" ]
	then
		rm -rf "$serverPath/node_modules"
	fi
	# tar -xf $dependencyPath -C "$serverPath/"
	
	# 启动项目
	cd $serverPath
	pm2 start $entry 
	# 保存/更新pm2运行应用的列表
	pm2 save
	# 开机自启动
	sudo pm2 startup -u ${USER} --hp ~
	pm2 ls

# 停止应用
elif [[ $1 == "stop" ]]
then
	cd $serverPath
	pm2 stop $entry
	# 更新pm2运行应用的列表
	pm2 save
	pm2 ls

elif [[ $1 == "restart" ]]
then
	cd $serverPath
	rm -f ../logs/*.log
	pm2 delete $entry
	pm2 restart $entry
else
	echo "请输入执行参数 start、stop or restart"
fi
