# JS Basic Task Two - JS入门(Part2: 函数)

## 必学内容
内容比较多，写着学完做哪个任务，不要一口气看完。重在理解，写任务的时候再回顾。遇到写着ES6的部分先跳过， 后面统一学习。
### 任务一前置知识
+ [JavaScript高级教程](https://www.runoob.com/js/js-objects.html)
+ [JavaScript函数](https://www.runoob.com/js/js-function-definition.html): 主要学习函数和闭包的概念。
### 任务二前置知识
+ [JavaScript计时事件](https://www.runoob.com/js/js-timing.html)
### 任务三前置知识
+ [JavaScript This](https://www.runoob.com/js/js-this.html)
+ [JavaScript bind、apply、call](https://www.runoob.com/w3cnote/js-call-apply-bind.html):学习后完成

## 课程任务
### 任务一：内置对象API运用练习，补充function中的代码
提示： reduce、for循环、 foreach
```javascript
// 1. 求一个数组中所有元素的乘积，试着用不同的方法来做，尽量让代码简洁易读
function getResult(arr){
  // ...
}
console.log(getResult([1, 2, 3])); // 输出6


// 2. 转换数据， 参考API: Object.assign() 或者 Array.prototype.forEach()
function convertListToMap(optionsList){
  //...
}
var optionsList = [
  {
    value: 'man',
    label: '男',
  },
  {
    value: 'woman',
    label: '女'
  }
]
var optionsMap = convertListToMap(optionsList);
console.log(optionsMap);
/**
输出：
{
  man: '男',
  woman: '女'
}
**/

```

### 任务二：闭包和计时事件
```javascript
// 说出下面的内容输出什么
for (var i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 0);
}

// 如果和设想的不一样， 想想这个程序每个语句的运行顺序？， 不能理解的话参考扩展资料中的【并发模型与事件循环 - MDN】 后面将会有解决这个问题的练习

// 能否使用setTimeout来实现setInterval? 提示：利用闭包。有点难， 1小时没写出来就放弃吧~等参考答案。
function mySetInterval(callback, interval){
  // ...
}
```

### 任务三： 运用bind、call、apply
```javascript
// 修改这段代码， 使得异步输出0~4
for (var i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 0);
}

// 回顾一下前面的原型，如何将Array.prototype.map作用在字符串上用一行代码实现让一个字符串的每个字符出现两次
function repeatEveryCharTwice(str){
  //...
}
var a = 'abcd';
console.log(repeatEveryCharTwice(a)); // 输出aabbccdd
```

## 扩展问题

## 扩展资料
+ [并发模型与事件循环 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)