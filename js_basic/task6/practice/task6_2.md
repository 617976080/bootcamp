# 任务二：闭包和计时事件

```javascript
// 说出下面的内容输出什么：5 5 5 5 5
for (var i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 0);
}

// 如果和设想的不一样，想想这个程序每个语句的运行顺序？，不能理解的话参考扩展资料中的【并发模型与事件循环 - MDN】后面将会有解决这个问题的练习
// 因为直到调用setTimeout()的主线程执行完其他任务之后，回调函数和代码段才能被执行，所以我认为这个程序应该是先执行for循环，遇到了setTimeout就先搁置，直到for循环结束后，才依次执行for循环里的setTimeout方法，执行五次，但因为此时i已经是5了，所以输出五个5。

// 能否使用setTimeout来实现setInterval? 提示：利用闭包。有点难，20分钟没写出来就放弃吧~等参考答案。
function mySetInterval(callback, interval){
  // 不会:(
}
```