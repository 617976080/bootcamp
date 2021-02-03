## 参考答案
### 任务一：内置对象API运用练习，补充function中的代码
```javascript
// 1. 求一个数组中所有元素的乘积，试着用不同的方法来做，尽量让代码简洁易读
function getResult(arr){
  // ...
}
console.log(getResult([1, 2, 3])); // 输出6

// 参考答案
function getResult(arr){
    if(arr.length === 0) return 0;
    return arr.reduce(function(last, currentElement){ return last * currentElement}, 1);
}


// 2. 转换数据， 参考API: Object.assign
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

// 参考答案1
function convertListToMap(optionsList){
  return optionsList.reduce(function(last, current){
        return Object.assign(last, {[current.value]: current.label })
  }, {});
};

// 参考答案2
function convertListToMap(optionsList){
  var obj = {};
  optionsList.forEach(function(option){
      obj[option.value] = option.label; 
  });
  return obj;
};
```

### 任务二：闭包和计时事件
```javascript
// 说出下面的内容输出什么
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// 如果和设想的不一样， 想想这个程序每个语句的运行顺序？， 不能理解的话参考扩展资料中的【并发模型与事件循环 - MDN】 后面将会有解决这个问题的练习

// 输出4个4 因为setTimeout里的函数是异步执行的， 它执行的时候i已经变成4了

// 能否使用setTimeout来实现setInterval? 提示：利用闭包。有点难， 20分钟没写出来就放弃吧~等参考答案。
function mySetInterval(callback, interval){
  // ...
}

// 参考答案 返回id用于clearTimeout来清除， 也可以不考虑这个， 实现执行即可
// 运用了闭包和内部函数
function mySetInterval(callback, interval){
  var id = '';
  function loop(){
      callback();
      id = setTimeout(loop, interval);
  }
  return id;
}

// 因为我们自己实现的setInterval是用setTimeout实现的  所以清除也是使用clearTimeout
function myClearInterval(id){
    clearTimeout(id);
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

// 参考答案
for (var i = 0; i < 5; i++) {
  setTimeout(function(i){
    console.log(i);
  }.bind(null, i), 0);
}
// 回顾一下前面的原型，如何将Array.prototype.map作用在字符串上用一行代码实现让一个字符串的每个字符出现两次
function repeatEveryCharTwice(str){
  //...
}
var a = 'abcd';
console.log(repeatEveryCharTwice(a)); // 输出aabbccdd

// 参考答案
function repeatEveryCharTwice(str){
  return Array.prototype.map.call(str, function(char){
      return char + char;
  }).join('');
}
```
