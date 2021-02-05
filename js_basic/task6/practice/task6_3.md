# 任务三： 运用bind、call、apply

```javascript
// 修改这段代码， 使得异步输出0~4
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// 不会。emm答案这么简单的嘛……

// 回顾一下前面的原型，如何将Array.prototype.map作用在字符串上用一行代码实现让一个字符串的每个字符出现两次
function repeatEveryCharTwice(str) {
  return Array.prototype.map.call(str, function(x) {
    return x + x;
  }).join('');
}
var a = 'abcd';
console.log(repeatEveryCharTwice(a)); // 输出aabbccdd
```