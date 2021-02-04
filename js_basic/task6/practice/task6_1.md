# 任务一：内置对象API运用练习，补充function中的代码

## 求一个数组中所有元素的乘积，试着用不同的方法来做，尽量让代码简洁易读

```javascript
// 方法一：
function getResult(arr) {
  var ans = 1, len = arr.length;
  for (var i = 0; i < len; ++i) {
    ans *= arr[i];
  }
  return ans;
}

// 方法二：
function getResult(arr) {
  var ans = 1;
  for (var i in arr) {
    ans *= arr[i];
  }
  return ans;
}

// 方法三：
function getResult(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce(function(total, num) { return total * num; }, 1);
}
```

## 转换数据，参考API: Object.keys()

```javascript
function convertListToMap(optionsList) {
  var arrObj = {};
  for (var i in optionsList) {
    var name = optionsList[i].value;
      arrObj[i] = Object.values(optionsList[i].value) + ': ' + Object.values(optionsList[i].label) + '\n';
  }
  return arrObj;
}

// 上述代码有误，正确的方法如下：

// 参考答案1（没看懂:(。Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象，它将返回目标对象：https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Object/assign）
function convertListToMap(optionsList){
  return optionsList.reduce(function(last, current){
        return Object.assign(last, {[current.value]: current.label })
  }, {});
};

// 参考答案2（利用forEach()方法对数组的每个元素执行一次给定的函数：https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach）
function convertListToMap(optionsList){
  var obj = {};
  optionsList.forEach(function(option){
      obj[option.value] = option.label; 
  });
  return obj;
};
```