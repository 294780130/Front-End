# Bootstrap

## 简介

### 什么是Bootstrap？

![Bootstrap 官网](./images/cover.png)

- 框架：库 lib library
- jQuery作为一个框架来讲，提供一套比较便捷的操作DOM的方式
- 把大家都需要的功能预先写好到一些文件  这就是一个框架
- Bootstrap 让我们的 Web 开发更简单，更快捷；

- 注意是 Bootstrap 不是 BootStrap！这是一个词，不是合成词，其含义为：n. 引导指令,引导程序
- Bootstrap 是当下最流行的前端框架（界面工具集）；
- 特点就是灵活简洁，代码优雅，美观大方；
- 其目的是为了让 Web 开发更敏捷；
- 是 Twitter 公司的两名前端工程师 Mark Otto 和 Jacob Thornton 在 2011 - 年发起的，并利用业余时间完成第一个版本的开发；

### 为什么使用Bootstarp？

- 生态圈火，不断地更新迭代；
- 提供一套美观大方地界面组件；
- 提供一套优雅的 HTML+CSS 编码规范；
- 让我们的 Web 开发更简单，更快捷；

### 注意：

> 使用 Bootstrap 并不代表不用写 CSS 样式，而是不用写绝大多数大家都会用到的样式


## 准备

### 下载Bootstrap

- https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip
- https://github.com/twbs/bootstrap/releases/download/v4.0.0-alpha.2/bootstrap-4.0.0-alpha.2-dist.zip


### 安装Bootstrap

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
  <!-- 引入Bootstrap核心样式文件（必须） -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- 引入Bootstrap默认主题样式（可选） -->
  <link rel="stylesheet" href="css/bootstrap.theme.min.css">
  <!-- 你自己的样式或其他文件 -->
  <link rel="stylesheet" href="example.css">
</head>
<body>
  <!-- 你的HTML结构...... -->
  <!-- 以下代码，如果不使用JS插件则不需要 -->
  <!-- 由于Bootstrap的JS插件依赖jQuery，so 引入jQuery -->
  <script src="js/jquery.min.js"></script>
  <!-- 引入所有的Bootstrap的JS插件 -->
  <script src="bootstrap.min.js"></script>
  <!-- 你自己的脚本文件 -->
  <script src="example.js"></script>
</body>
</html>
```

### Bootstrap文档

- [官方文档](http://getbootstrap.com/)
- [中文文档](http://v3.bootcss.com/)

### 基础的Bootstrap模板

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

### Compatible

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

- 此属性为文档兼容模式声明，表示如果在IE浏览器下则使用最新的标准渲染当前文档

### 视口

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- 视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示
- 目前大多数手机浏览器的视口（承载页面的容器）宽度都是980；
- 视口的宽度可以通过meta标签设置
- 此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）
  + width:视口的宽度
  + initial-scale：初始化缩放
  + user-scalable:是否允许用户自行缩放（值：yes/no; 1/0）
  + minimum-scale:最小缩放，一般设置了用户不允许缩放，就没必要设置最小和最大缩放
  + maximum-scale:最大缩放

### 条件注释

- 条件注释的作用就是当判断条件满足时，就会执行注释中的HTML代码，不满足时会当做注释忽略掉

### 第三方依赖

- [jQuery](https://github.com/jquery/jquery)

    > Bootstrap框架中的所有JS组件都依赖于jQuery实现

- [html5shiv](https://github.com/aFarkas/html5shiv)

    > 让低版本浏览器可以识别HTML5的新标签，如header、footer、section等

- [respond](https://github.com/scottjehl/Respond)

    > 让低版本浏览器可以支持CSS媒体查询功能

## 建议以后在HTML中将脚步的引入放到页面最底下

## mediaquery

```css
@media (判断条件（针对于当前窗口的判断）){
    /*这里的代码只有当判断条件满足时才会执行*/
}

@media (min-width: 768px) and (max-width: 992px) {
  /*这里的代码只有当(min-width: 1280px)满足时才会执行*/
  .container {
    width: 750px;
  }
}
```

- 当使用min-width作为判断条件一定要从小到大，其原因是CSS从上往下执行

## 基础CSS样式

- [概要](http://v3.bootcss.com/css/#overview)
    + 
- [预置排版样式](http://v3.bootcss.com/css/#type)
    + 统一预制标签样式
    + 
- [按钮样式](http://v3.bootcss.com/css/#buttons)
    + 
- [表格样式](http://v3.bootcss.com/css/#tables)
    + 
- [表单样式](http://v3.bootcss.com/css/#forms)
    + 
- [图片样式](http://v3.bootcss.com/css/#images)
    + 
- [辅助工具类](http://v3.bootcss.com/css/#helper-classes)
    + 
- [代码样式](http://v3.bootcss.com/css/#code)
    + 
- [栅格系统](http://v3.bootcss.com/css/#grid)
    + __xs__ : 超小屏幕 手机 (<768px)  
    + __sm__ : 小屏幕 平板 (≥768px) 
    + __md__ : 中等屏幕 桌面显示器 (≥992px) 
    + __lg__ : 大屏幕 大桌面显示器 (≥1200px)
- [响应式工具类](http://v3.bootcss.com/css/#responsive-utilities)
    + __hidden-xx__ : 在某种屏幕下隐藏 
    + __visible-xx__ : 在某种屏幕尺寸下显示

## 预置界面组件

- [导航](http://v3.bootcss.com/components/#nav)
- [导航条](http://v3.bootcss.com/components/#navbar)
- [面包屑导航](http://v3.bootcss.com/components/#breadcrumbs)
- [下拉菜单](http://v3.bootcss.com/components/#dropdowns)
- [按钮式下拉菜单](http://v3.bootcss.com/components/#btn-dropdowns)
- [按钮组](http://v3.bootcss.com/components/#btn-groups)
- [输入框组](http://v3.bootcss.com/components/#input-groups)
- [警告框](http://v3.bootcss.com/components/#alerts)
- [页头](http://v3.bootcss.com/components/#page-header)
- [分页](http://v3.bootcss.com/components/#pagination)
- [列表组](http://v3.bootcss.com/components/#list-group)
- [面板](http://v3.bootcss.com/components/#panels)
- [媒体对象](http://v3.bootcss.com/components/#media)
- [进度条](http://v3.bootcss.com/components/#progress)
- [Glyphicons](http://v3.bootcss.com/components/#glyphicons)
- [标签](http://v3.bootcss.com/components/#labels)
- [徽章](http://v3.bootcss.com/components/#badges)
- [缩略图](http://v3.bootcss.com/components/#thumbnails)
- [大屏幕](http://v3.bootcss.com/components/#jumbotron)
- [嵌入内容](http://v3.bootcss.com/components/#responsive-embed)
- [内嵌](http://v3.bootcss.com/components/#wells)

## JavaScript插件

### JavaScript插件的依赖情况

### 如何使用Javascript插件

### 内置组件
    
- [模态对话框](http://v3.bootcss.com/javascript/#modals)
- [下拉菜单](http://v3.bootcss.com/javascript/#dropdowns)
- [滚动监听](http://v3.bootcss.com/javascript/#scrollspy)
- [标签页](http://v3.bootcss.com/javascript/#tabs)
- [工具提示](http://v3.bootcss.com/javascript/#tooltips)
- [弹出框](http://v3.bootcss.com/javascript/#popovers)
- [警告框](http://v3.bootcss.com/javascript/#alerts)
- [按钮](http://v3.bootcss.com/javascript/#buttons)
- [折叠面板](http://v3.bootcss.com/javascript/#collapse)
- [轮播图](http://v3.bootcss.com/javascript/#carousel)
- [吸顶效果](http://v3.bootcss.com/javascript/#affix)
    + data-spy="affix"
    + data-offset-top="什么位置出现"
    + data-offset-bottom="什么位置消失"
    
## 深度自定义 Bootstrap

### 在线自定义

- [官网在线](http://getbootstrap.com/customize/)
- [中文网在线](http://v3.bootcss.com/customize/)

### 源码编译

### LESS语言

- [官方文档](http://lesscss.org/)
- [中文文档](http://lesscss.cn/)