# 扩展问题

1. 在class属性里用空格声明多个类会发生什么（考虑多个类之间的优先级相同/不同的情况）？<br />
   答：相同时和style里声明的顺序有关，顺序后的优先级高。不同时以优先级高的为准。

2. 文本的水平居中和垂直居中可以怎么实现？（学完 CSS3 可以再回来看这个问题, 会有更多答案）<br />
   答：水平居中：text-align: center; <br />
      垂直居中：文章里都写了 :) <br />
      参考资料：https://segmentfault.com/a/1190000014116655

3. margin 和 padding 分别设置为负值会有什么效果？<br />
   答：margin会改变相对位置；padding不会有变化（报错：Invalid property value）

4. 对行内元素设置 width 和 height 会起作用吗？<br />
   答：不会起作用。
