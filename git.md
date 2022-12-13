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

<<<<<<< HEAD
// fix: Failed to connect to github.com port 443 after 21048 ms: Timed out
git config --global http.sslVerify 'false'
git push

=======
>>>>>>> 657fc35 (add git.md)

```