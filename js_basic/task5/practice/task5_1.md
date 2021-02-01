# 任务一

下面的问题先思考，然后运行验证，发现错误后可以根据给出的关键词去找资料。
遇到没有见过的对象、函数就到MDN上查一下，快速了解。
一些思考的点可以尝试回答，不必要花时间去找资料，主要看下有没有一些灵感。

### 判断当 a 等于不同值时下列代码输出什么

```javascript
let a = ""; //1 错：2
a = "a"; //1
a = null; //2
a = undefined; //2
a = 0; //2
a = NaN; //1 错：2
a = []; //2 错：1
a = {}; //2 错：1
if (a) {
  console.log(1);
} else {
  console.log(2);
}
```

```javascript
// 如果==更换为===会是什么样的结果
let a = "";
if (a == 0) {
  console.log(1); //输出 不输出
}
a = "1a";
if (a == 1) {
  console.log(1); //不输出 不输出
}
a = undefined;
if (a == null) {
  console.log(1); //输出 不输出
}
if (a == NaN) {
  console.log(1); //输出 不输出 错：不输出 不输出
}
```

**关键词：类型转换、严格等于**

**思考：我们写代码的时候，使用==还是===比较好呢**

答：==是数值相等，而===还需要数据类型也相等。个人觉得没有什么比较好，看使用场景吧。如果是需要判断空值时，用==好一些，如果是判断是否等于某个特定的值，最好使用===以防出现其他数据类型来捣乱的情形。

### 判断下列代码的输出

```javascript
var a = [1, 2, 3];
var b = a;
b[1] = 0;
console.log(a);
// 1,2,3 错：1,0,3
```

**关键词：基本数据类型和值引用类型**

**思考：既然有这样的问题，写代码的时候要注意什么。函数参数传递以及在函数内部使用一个数组、对象的时候要注意什么**

答：如果传递了一个对象（包括Array）作为参数，且函数改变了这个对象的属性，这样的改变对函数外部是可见的，因此需要格外谨慎。

### 怎样判断一个变量的类型 typeof 可以判断数组和对象的类型吗 instanceof 可以判断基础类型吗 还有什么别的方式

答：typeof不能判断是数组类型还是对象类型，这两种类型使用typeof判断时都会显示是Object类型。
不能。instanceof只能判断类型是否存在于参数object的原型链上，所以只能用来判断两个对象是否属于实例关系，而不能判断一个对象实例具体属于哪种类型。
其他方法：使用constructor属性或者toString方法。
参考资料：https://www.cnblogs.com/onepixel/p/5126046.html


### 使用 Date 对象，写一个函数打印当前时间，以'2018-09-12'这样的格式

```javascript
function printDate() {
    var d = new Date();
    var month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var str = d.getFullYear() + '-' + month[d.getMonth()] + '-' + d.getUTCDate();
    document.getElementById("printDate").innerHTML = str;
}
```

### 写一个正则表达式判断一个字符串是不是一个合法的div元素

```javascript
var regex = /<div>.*<\/div>/i; // 补充完整
var case1 = '<div>test content</div>';
var case2 = '<div>test content';
console.log(regex.test(case1)); // output: true
console.log(regex.test(case2)); // output: false
```

### 说出下列输出的值

```javascript
var a = '';
var b = 'test';
var x = a && b;
var y = a || b;
console.log(x); //false 错：''
console.log(y); //true 错：'test'，x和y都是string类型

var p = a || (x = 1);
var q = b && (b = 2);
console.log(x); //'' 错：1
console.log(q); //'test' 错：2，x和q都是number类型
```

**思考：写代码的时候建议写这种代码吗？**

答：不建议。因为写的时候会改变其他变量，容易引起混乱。

### 思考下面的代码运行情况。

```javascript
var a = [1, 2, 3, 4, 5, 6];
var cnt1 = 0;
for(var i = 0; i < a.length; ++i){
    a.splice(1, 1);
    cnt1++;
}
console.log(cnt1); // 输出多少？ 3
console.log(a); // a是怎样的？ 1,5,6

var cnt2 = 0;
for(var i = 0, l = a.length; i < l; ++i){
    a.splice(0, 1);
    cnt2++;
}
console.log(cnt2); // 输出多少？ 6 错：3（噗 忘了a.length变成3了）
```

## 扩展问题

+ JavaScript和C、Java有什么区别？比如关于基本数据类型、对象等等，发散开来可以从任何方面回答。
答：基本数据类型不同，JS有特殊的undefined和symbol类型；声明方式不同（var），JS更加灵活；

+ `var str = new String('abc');`和`var str = 'abc';`有什么区别？
答：前者的类型是object，后者的类型是string；数值相等但是数据类型不同。
