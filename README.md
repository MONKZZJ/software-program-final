# software-program-final
软件工程期末结项

这里是南开大学软件工程期末作业——智慧渔业可视化系统的结项项目

## 项目支持
### 后台服务器搭建

**phpstudy_pro**（Apache 2.4.39 + FTP 0.9.60）

**MySQL 8.0.12**（更低版本也可，最低尝试到 MySQL 5.7.36）、

**Navicat Premium 15**

[phpstudy 下载链接](https://www.xp.cn/download.html)

[Navicat下载链接](https://navicat.com.cn/products)

### 前端代码编写

**VS code 1.90.2**

## 安装说明

1. 下载phpstudy_pro后以管理员身份运行：

![image-20240628074203027](C:\Users\张梓杰\AppData\Roaming\Typora\typora-user-images\image-20240628074203027.png)

2. 进入界面后运行Apache 2.4.39 和 FTP0.9.60，如果没有安装后台数据库请安装MySQL5.7.26；

3. 安装Navicat，点击左上角链接——选择SQL

4. 根据数据库用户名和密码登入，可以先测试链接，建议保存密码再操作

5. 在建立的连接中新建名为'usr_info'的数据库，新建完成后双击该数据库进行启动，右键点击选择“执行SQL文件”
6. 在需要打开的文件中选择我们提供的usr_info.sql文件导入，完成后关闭即可看到数据库表结构和数据。
7. **测试中出现数据库链接失败的情况，请将自己的SQL数据库用户名改为'root'，密码改为'qawsed09842'；**
8. 在’网站管理‘中添加对应的网站：![image-20240628092120755](C:\Users\张梓杰\AppData\Roaming\Typora\typora-user-images\image-20240628092120755.png)

9. 域名使用localhost（127.0.0.1），端口注意不要和系统的其他端口冲突，根目录选择源代码文件“smart-system”所在的目录确认后对网页选择“管理——打开网站”即可进入主页。
10. 对于该项目网站，没有用户可以直接进行注册（记得要在连接数据库的情况下），也可以直接使用默认root账户（用户名，密码均为root）登录系统查看，该账户拥有管理员权限也可登录后台用户管理系统。

## 注意事项

**登录后的大数据可视化界面中，水下系统中的“水质质量评分”模块可能出现不显示的情况，若不显示，请尝试缩放网页以解决问题**！！
