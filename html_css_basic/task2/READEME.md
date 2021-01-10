# HTML&CSS Basic Task Two
## 必学内容
学习https://www.runoob.com/css/css-examples.html中的：
  - css教程
  - css简介
  - css id和class选择器：前端主要使用class选择器，id选择器了解即可
  - css创建：了解html如何引用外部css文件
  - css背景
  - css文本
  - css字体
  - css link
  - css ul
  - css 盒子模型
  - css border
  - css outline 了解即可
  - css margin
  - css padding
  - css分组和嵌套
  - css 尺寸
  - css display
  - css position
  - css overflow
  - css 对齐
  - css组合选择符
  - css 伪类
  - css 伪元素

## 课程任务
### 任务一
在开发过程中大部分情况使用class选择器，少数情况使用后代选择器和id选择器，important和style尽量不要使用
判断每一段文字的颜色，可以在本地用一个html文件保存代码验证一下自己的推测是否正确
·this is root
·this is class
·this is important
·this is style
·this is h1
·this is h1 too
```html
<style>
.root{
  color:black;
}
h1{
  color:blue;
}
.root h1{
  color:#ffc
}
.root>h1{
  color:red;
}
.root~h1{
  color:green;
}
.root+h1{
  color:#ddd;
}
.class{
  color:pink!important;
}
.important{
  color:pink;
}
</style>
<div class='root'> 
  this is root
   <h1 class='class'>this is class</h1>
   <h1 class='important'>this is important</h1>
   <h1 style='color:grey'>this is style</h1>
  <h1>this is h1</h1>
  <div>
     <h1> this is h1 too</h1>
  </div>
</div>
<h1>this is h1 outside root</h1>
<h1>this is h1 outside root too</h1>
```
### 任务二
使用HTML + CSS实现task.png中的小页面。
提示：这几个icon， 他们的大小一样， 背景图片的尺寸、相对icon元素的位置、重复模式都一样， 只有图片地址不一样，如何更优雅地实现代码？

# 扩展问题
+ 在class属性里用空格声明多个类会发生什么（考虑多个类之间的优先级相同/不同的情况）？