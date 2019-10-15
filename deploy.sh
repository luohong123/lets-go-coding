#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sudo npm run docs:build

# 进入生成的文件夹
sudo cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

#创建.nojekyll 防止Github Pages build错误
sudo touch .nojekyll

git init
git add -A
git commit -m 'deploy'
# 远程仓库别名  分支名称
git push -f "https://${access_token}@github.com/luohong123/lets-go-coding.git" master:gh-pages

sudo cd -
