# HOMEWORK1 需求文档

## 标题

- [x] 所有标题都使用 #A4A400 颜色，#F0F0F0 的背景颜色。
- [x] 所有标题都使用  Century Gothic, Futura, Verdana 字体。
- [x] 首标题使用粗体bold并居中，次标题使用普通粗细normal并左对齐。
- [x] 所有标题都加下划线。
- [x] 网页标题是 Grandma's Lemon Meringue Pie

## 正文

- [x] 背景使用白色（默认）
- [x] 正文使用颜色 #404040 与字号 11pt，字体 Georgia, Garamond。

## 超链接

- [x] 全部使用  #A4A400 颜色
- [x] home 指向 index.html
- [x] Search for other lemon meringue pie recipes 指向 https://www.google.com.hk/search?q=lemon+meringue+pie+recipe

## 步骤

- [x] 主要步骤使用粗体，

## 评论

- [x] 使用斜体，使用 #FFFFC8 背景颜色，要有缩进。

## 图片

- pie的图片http://courses.cs.washington.edu/courses/cse190m/09sp/homework/1/pie.jpg
- 文末图片超链接的链接 http://www.w3.org/Icons/valid-xhtml11 and http://jigsaw.w3.org/css-validator/images/vcss

## 附加条件

至少选择两项完成。

- [x] 背景：添加一个铺满页面且**不随页面滚动**而移动的背景图片。https://courses.cs.washington.edu/courses/cse190m/09sp/homework/1/silverware.jpg

- [X] 更改列表前方的点为图片。

- [X] 更改网页标题前的图片。

- [x] 更宽的标题。 所有标题的字间距为0.2em。

- [x] 去除图片链接外的边框。

- [x] 随意。

## 注意事项 

- meta标签的写法有毒 `<meta http-equiv="Content-type" content="text/html; charset=UTF-8">`

- 开头不要忘记加 `<!DOCTYPE html>`

- 列表嵌套时，列表的结束标记符位置会影响测试，但不会影响网页外观

```html
<!--correct-->
<li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
<!--wrong-->
<li>Tea</li>
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
```

- 不要使用 `<b> <i>` ，使用 `<em> <strong>` 替代他们