#!/usr/bin/env sh
###
 # @since: 2021-07-07 16:20:50
 # @LastAuthor: Do not edit
 # @lastTime: 2021-07-07 17:00:29
 # @文件相对于项目的路径: \data-report-webe:\项目开发\web__news\vuepress-starter\deploy.sh
 # @Author: ltm@xtoneict.com
 # @message: 配置文件
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
#echo 'www.charactor.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
git push -f git@github.com:charac/charac.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/vuepress.git master:gh-pages

cd -
