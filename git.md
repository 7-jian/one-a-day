```js
// 配置user信息
git config --global user.name "your name"
git config --global user.email "your email"

// 对当前用户所有仓库有效 
git config --global
// 只对某个仓库有效
git config --local

// 显示config的配置，加--list
git config --list --local
git config --list --global
git config --list --system

pwd // 查看当前目录
clear // 清屏
cp ../a . // 复制文件
cp -r ../a . // 复制文件夹
ls -al // 查看文件夹下的文件
mkdir a // 创建文件夹
vi a // 编辑文件
:wq!
// w ->表示保存退出
// wq! ->表示强制保存退出,可以保存”readonly”只读文件
// q ->在vim中表示退出
// q! ->表示强制不保存退出，不对文件进行保存

cls // Windows-cmd
dir // Windows 查看文件夹下的文件

git statue // 查看当前状态
git add -u // 更新所有已经被跟踪的文件, 避免把工作区没准备好的新文件直接加到暂存区

// fix: Failed to connect to github.com port 443 after 21048 ms: Timed out
git config --global http.sslVerify 'false'
git push

// 文件重命名 readme -> readme.md
mv readme readme.md
git add readme.md
git rm readme

git mv readme readme.md
git config core.ignorecase true // 忽略大小写

// 清除暂存区
git reset --hard

// git log
git log --all // 查看所有分支的历史
git log --oneline -n4 // 查看最近的四条简洁历史
git log --all --graph // 查看图形化的 log 地址
git help --web log // 跳转到git log 的帮助文档网页

// branch
git branch -v // 查看分支
git checkout -b dev // 创建并切换到dev分支

// mac
sudo apt-get install gitk // 安装gitk

// 删除不必要的分支
gitk --all // 查看所有分支
git branch -d dev // 删除dev分支

// 对最新一次提交做 commit 修改
git commit --amend

// rebase通常用在还没有提交到集成分支之前
// http://jartto.wang/2018/12/11/git-rebase/
git rebase -i HEAD~3(父节点commitId) // 修改最近三次提交
git rebase --continue
git rebase --abort
```