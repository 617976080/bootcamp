# 任务一：遍历练习

```javascript
/* 在html里加上一个无序列表
<ul id="list">
  <li>item1</li>
  <li>item2</li>
</ul>
*/
var $ul = document.createElement('ul');
['item1','item2'].forEach(function(content){
    var $li = document.createElement('li');
    $ul.appendChild($li);
    $li.innerText = content;
    // $li.appendChild(document.createTextNode(content)); 蠢
})
var $body = document.getElementsByTagName('body');
$body[0].appendChild($ul);

var listItems = document.getElementById('list').children;
```

提问：这个listItems是什么类型？（必学内容里有哦）
答：HTMLCollection

试着不用for循环遍历listItems
提示: 结合上一个task学习的原型知识、bind、apply、call调用Array上的forEach函数
```javascript
var listItems = document.getElementById('list').children;
Array.prototype.forEach.call(listItems, function(x) {
    console.log(x.innerText);
});
```