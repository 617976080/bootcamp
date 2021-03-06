# JS Basic Task Four - JS入门(Part4: 异步编程)

## 必学内容
+ [JavaScript AjAx](https://www.runoob.com/js/js-async.html): 看完后完成任务一、任务二。（注：如果本地运行出现跨域问题， 就在菜鸟教程的演示里改代码吧）
+ [JavaScript Promise - 菜鸟教程](https://www.runoob.com/js/js-promise.html)、[JavaScript Promise - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise): 看完后完成任务二。

## 课程任务
### 任务一：闭包、回调、时间练习
实现收到第一个请求控制台打出“收到第一个请求的返回”，同时发出第二个请求，在收到第二个请求的返回后打出“收到第二个请求的返回”。

### 任务二： 函数封装练习(一)
封装一个函数，参数是一个url和callback， 函数会发起一个ajax的get请求，这个请求得到返回后执行callback, callback的第一个参数是responseText。
然后使用封装好的fetch函数重新完成任务一。
```javascript
function fetch(url, callback){
//...
}

// 调用效果
fetch("https://www.runoob.com/try/ajax/ajax_info.txt", function(response){
  console.log(response);
});



// 输出 
/*
AJAX 不是新的编程语言，而是一种使用现有标准的新方法。

AJAX 是与服务器交换数据并更新部分网页的技术，在不重新加载整个页面的情况下
*/
```

### 任务三：复杂请求关系
实现一下同时发出两个请求， 在这两个请求都返回后发送第三个请求。

### 任务四：函数封装练习(二)
前面虽然封装了fetch， 但是没有用上promise， 有回调地狱问题， 需要在callback里再调一个fetch， 很丑陋。学习了promise， 我们就可以进一步优化fetch函数， 它返回一个promise对象。
然后使用新的fetch函数再次完成任务一、   任务三。
```javascript
function fetch(url){
  //....
  return new Promise() // 省略部分代码
}

//调用效果
fetch("https://www.runoob.com/try/ajax/ajax_info.txt").then(function(response){
  console.log(response);
});

// 同样的输出， 不再赘述
```