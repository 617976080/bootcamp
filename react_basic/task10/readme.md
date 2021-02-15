# React Basic Task One - React入门(Part1: 环境构建和初次上手)

## 必学内容
### 了解
+ [创建新的 React 应用 - React官网](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html): 简单看看官网关于构建一个基于React应用的介绍。

### 环境安装相关资料(看任务一指示操作)：
+ [nvm](https://github.com/nvm-sh/nvm):nvm是nodejs版本的管理器，安装nvm是因为后续本地可能会有使用不同nodejs版本的项目，所以需要使用它来管理nodejs，而不是直接安装某一个版本的nodejs。nodejs是一种javascript的运行环境，能够使得javascript脱离浏览器运行。有了它你才能将js运行到本地做很多构建工作， 比如后面用到的CRA(create-react-app)等。 
+ [npm](https://www.npmjs.com/):nodejs默认的包管理工具
+ [yarn](https://yarnpkg.com/):第三方的nodejs包管理工具，根据团队习惯在npm和yarn中选择，这里推荐使用yarn。
+ [Create-React-App](https://create-react-app.dev/docs/getting-started):使用它能自动帮你配置好一个开箱即用的React工程。小公司可能在生产环境使用它，但大厂由于要去集成一些自己的工具（比如埋点、水印等）、做一些性能优化（就需要去自定义配置），所以会有内部的开发套件（实际使用的时候也是要去自定义一些配置的，技术上没有银弹，没有能解决所有问题的工具）。所以后续的篇章会去学习如何自己去搭建一个工程。

### React学习
+ [Main concepts - react](https://reactjs.org/docs/hello-world.html):看的时候肯定会有很多不懂，把不懂的地方标一下，可以找我问一下。先看一遍React基本概念和思想。
+ [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html):从overview开始看起，完成官方的这个教程
## 课程任务
### 任务一：环境安装及工程搭建
以下的步骤参考官网即可， 网上的二手资料不一定靠谱（这些工具的安装可能随着版本迭代而变化， 官网会随时更新到最新， 而二手资料不会）。 根据nvm的github上的readme提示安装nvm， 学会使用nvm安装、切换node版本。 然后按照node12, 将本地启动版本默认设置为node12。 接着不需要安装npm(在高版本里自带了), 切换npm的源到淘宝源（百度一下）， 然后安装yarn。 最后使用Create-React-App在本项目的apps下创建一个新项目， 比如apps/zy-react-js-demo。

### 任务二：React入门
看一遍基本概念后，看官方的tutorial，这个过程中遇到不会的回去翻main concepts或者去翻官方的api，跟着tutorial完成任务（代码写在使用CRA创建的工程里）。

## 扩展资料
+ [concepts - webpack](https://webpack.js.org/concepts/): 简单看看webpack官网， 了解下webpack是什么
+ [babel](https://babeljs.io/): 简单了解下babel

## 扩展问题
* nodejs给前端带来了怎样的改变？为什么我们要使用webpack和babel(可以理解成CRA帮你使用了它们并做了一些配置，让你无感知地使用)。