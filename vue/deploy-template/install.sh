#!/bin/bash

baseDir=$(cd `dirname $0` && pwd)
cd $baseDir

# 模块路径
MODEL_DIR=$1
MODEL_PACKAGE='dist.zip'
DIST_DIR=${MODEL_DIR}'/dist'

#----------------------------------------------------------
# function install
#----------------------------------------------------------
install()
{

if [ ! -n "$1" ] ;then
    echo "you have not input a word!"
	return 1
else
    echo "star install $1 >>>>>>"
fi

if [ -d "${MODEL_DIR}" ]
then
echo "${MODEL_DIR} exists, star upgrade $1 >>>>>>"

rm -rf ${baseDir}/bak/dist

mv ${baseDir}/${DIST_DIR} ${baseDir}/bak

mkdir -p ${baseDir}/${DIST_DIR}

unzip ${baseDir}/${MODEL_PACKAGE} -d ${baseDir}/${DIST_DIR}

cd ${baseDir}/${MODEL_DIR}

rm -f ./logs/*.log

sh bin/run.sh restart

fi

}

install $1

