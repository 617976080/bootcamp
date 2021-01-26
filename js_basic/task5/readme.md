# JS Basic Task One - JS入门(Part1: 基础语法)

## 必学内容

+ [JavaScript教程](https://www.runoob.com/js/js-tutorial.html)
    + JavaScript教程部分：从头看到JavaScript调试

看起来内容很多，但是像什么if、else、运算符、表达式每个语言都一样，学习的时候重点理解概念，语法不必强记，一开始生疏的时候就多翻手册就好，用多了自然会记得。对于数组、字符串之类的有很多函数，也不需要去看他们的例子，只要有个印象，大概有哪些能力就可以了，后面自然后慢慢熟练起来，也可以用的时候再看。

## 课程任务

### 任务一
下面的问题先思考， 然后运行验证，发现错误后可以根据给出的关键词去找资料。
遇到没有见过的对象、函数就到MDN上查一下， 快速了解。
一些思考的点可以尝试回答， 不必要花时间去找资料， 主要看下有没有一些灵感。


#### 判断当 a 等于不同值时下列代码输出什么

```javascript
let a = "";
a = "a";
a = null;
a = undefined;
a = 0;
a = NaN;
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
  console.log(1);
}
a = "1a";
if (a == 1) {
  console.log(1);
}
a = undefined;
if (a == null) {
  console.log(1);
}
if (a == NaN) {
  console.log(1);
}
```

**关键词： 类型转换、严格等于**
**思考： 我们写代码的时候， 使用==还是===比较好呢**

#### 判断下列代码的输出

```javascript
var a = [1, 2, 3];
var b = a;
b[1] = 0;
console.log(a);
```

**关键词：基本数据类型和值引用类型**

**思考：既然有这样的问题， 写代码的时候要注意什么。 函数参数传递以及在函数内部使用一个数组、对象的时候要注意什么** 

#### 怎样判断一个变量的类型 typeof 可以判断数组和对象的类型吗 instanceof 可以判断基础类型吗 还有什么别的方式

#### 使用 Date 对象，写一个函数打印当前时间，以'2018-09-12'这样的格式

#### 写一个正则表达式判断一个字符串是不是一个合法的div元素

```javascript
var regex = //; // 补充完整
var case1 = '<div>test content</div>';
var case2 = '<div>test content';
console.log(regex.test(case1)); // output: true
console.log(regex.test(case2)); // output: false

```
#### 说出下列输出的值。
````javascript
var a = '';
var b = 'test';
var x = a && b;
var y = a || b;
console.log(x); 
console.log(y);

var p = a || (x = 1);
var q = b && (b = 2);
console.log(x);
console.log(q);
````

**思考：写代码的时候建议写这种代码吗？**

#### 思考下面的代码运行情况。
```javascript
var a = [1, 2, 3, 4, 5, 6];
var cnt1 = 0;
for(var i = 0; i < a.length; ++i){
    a.splice(1, 1);
    cnt1++;
}
console.log(cnt1); // 输出多少？
console.log(a); // a是怎样的？

var cnt2 = 0;
for(var i = 0, l = a.length; i < l; ++i){
    a.splice(0, 1);
    cnt2++;
}
console.log(cnt2); // 输出多少？
```

## 扩展问题
+ JavaScript和C、Java有什么区别？ 比如关于基本数据类型、 对象等等，发散开来可以从任何方面回答。

