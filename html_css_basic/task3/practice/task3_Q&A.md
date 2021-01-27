# 扩展问题

1. 浏览器是如何根据z-index渲染层级的？<br />
答：z-index仅能在定位元素上奏效（例如position:absolute;）；<br />
z-index大的元素会覆盖z-index小的元素，z-index为负值时，元素被普通流中的元素覆盖；<br />
ie浏览器对于没有设置z-index属性的元素，默认是以z-index为0来渲染的，参与z-index的比较；<br />
firefox和Chrome对于没有设置z-index属性的元素，默认是以z-index为auto来渲染的，不参与z-index的比较；<br />
ie下，z-index依赖于同级比较。<br />
参考资料： <br />
https://www.cnblogs.com/golden-wind/p/3157563.html <br />
https://blog.csdn.net/weixin_40512519/article/details/81281682
