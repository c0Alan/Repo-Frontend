#!/bin/bash

baseDir=$(cd `dirname $0` && pwd)
cd $baseDir

# 模块路径
MODEL_DIR=$1

#----------------------------------------------------------
# function install
#----------------------------------------------------------
install()
{

if [ ! -n "$1" ] ;then
    echo "请输入模块名!"
	return 1
else
    echo "开始部署 $1 >>>>>>"
fi

mv dist.zip ${MODEL_DIR}/dist.zip
cd ${MODEL_DIR}
rm -rf dist/*
unzip dist.zip -d dist

model_start

}

model_start()
{
pm2 restart ${MODEL_DIR}
}

model_stop()
{
pm2 stop ${MODEL_DIR}
}


#-------------------------------------------------------------------
# main
#-------------------------------------------------------------------

install $1

