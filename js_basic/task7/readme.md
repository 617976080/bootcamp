# JS Basic Task Three - JS入门(Part3: Dom)

## 必学内容
+ [JavaScript Dom](https://www.runoob.com/js/js-htmldom.html): 学习JS操作DOM， 遇到问题在MDN上查对应API的更多详细信息

## 课程任务
### 任务一：遍历练习
```javascript
/* 在html里加上一个无序列表
<ul id="list">
  <li>item1</li>
  <li>item2</li>
</ul>
*/
var listItems = document.getElementById('list').children;

// 提问： 这个listItems是什么类型？ （必学内容里有哦）

// 试着不用for循环遍历listItems
// 提示: 结合上一个task学习的原型知识、bind、apply、call调用Array上的forEach函数.

```

### 任务二：简单动效练习
结合当前学习的dom操作， 实现鼠标滑动到封面上时的动效， 具体效果见animation.gif。 动画部分分别使用CSS动画和JS的计时事件（setTimeout、setInterval）实现。
提示： 使用JS实现动画的时候需要先想清楚计算函数和时间的关系， 可以利用Date对象上的方法获得时间戳来计算。

### 任务三： 实现一个简单选项卡
参考tab.gif实现， 注意默认有一个初始选项卡是展示的（比如例子里默认展示最新这个tab）

### 任务四：左右切换滑动组件
完成一个轮播图， 效果见swiper.gif。 其实它只是在简单选项卡的基础上增加自动播放以及左右切换的效果。 不要求使用JS来实现动画（感兴趣也可以试一下）。

## 扩展资料
+ [合作异步JavaScript: 超时和间隔](https://developer.mozilla.org/zh-cn/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/%E8%B6%85%E6%97%B6%E5%92%8C%E9%97%B4%E9%9A%94): 深度了解setTimeout和setInterval， 以及更好的替代方式以及解决实际问题。建议仔细阅读做笔记。