---
{
    'title':'mac命令'
}
---
## mac 下 yunx .sh 脚本

```
在终端进入脚本所在路径，

在终端输入：

./deploy.sh

如果出现 permission denied，就重新设置一下权限再运行，

chmod 777 deploy.sh

./deploy.sh
```

## 提示 Permission denied

```
一：赋予文件权限

一个文件有3种权限，读、写、可执行，你这个文件没有可执行权限，需要加上可执行权限。

1. 终端下先 cd到该文件的目录下

2. 执行命令 chmod a+x ./文件名

二：赋予文件夹权限

$ sudo chmod -R 777 目录路径

其中 -R 是指级联应用到目录里的所有子目录和文件

777 是所有用户都拥有最高权限
```
