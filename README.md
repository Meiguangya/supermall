# supermall

  
<kbd>摆摊日记</kbd>
 
*第一天* 
> 创建项目目录结构  
> tabBar、tabBarItem、MainTabBar组件  
> 注册router  route/index.js

*第二天*  
> 创建NarBar组件 首页添加NarBar(导航栏)  
> 解决之前路由没有成功的问题  route/index.js 里面导入组件方法有误 
```
const Home = () => import('views/home/home')

const Home = () => {return import('views/home/home')}
```
> 如果剪头函数要加大括号，必须return一个值

*第三天*
> 添加axios
> 添加轮播图插件
> 添加 element-ui 
> 添加webstorm的webpack配置文件 修改别名方式

*第四天*
> 添加mock数据
> 写入静态测试数据




### git command line
```
git add .
git push -u origin master
```

[markdown语法}](https://www.runoob.com/markdown/md-link.html)
