# deploy.sh
# 错误时停止
set -e

# 打包
yarn build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/OuZuYu/dameng.github.io.git master:gh-pages

cd -