## impony-1px-border 0.2.1

可以在项目中方便的使用 1px 边框

<a href="http://impony.com/impony-1px-border/demo/index.html" target="_blank">点击这里查看在线演示</a>

### 使用方法

在项目中引用 dist 目录下的那个 CSS 文件即可

``` html
<link href="impony-1px-border.css" rel="stylesheet" />
```

### 具体 HTML 结构

1. 可以都写成两层结构
2. 可以写成单层结构（除了四条边、三条边、左上、右下这几种情况）

#### 四条边

``` html
<div class="border-top-1px border-bottom-1px">
    <div class="border-right-1px border-left-1px">
        上下左右边框
    </div>
</div>
```

#### 三条边

``` html
<div class="border-top-1px border-bottom-1px">
    <div class="border-right-1px">
        上下右边框
    </div>
</div>
```

``` html
<div class="border-top-1px border-bottom-1px">
    <div class="border-left-1px">
        上下左边框
    </div>
</div>
```

``` html
<div class="border-right-1px border-left-1px">
    <div class="border-top-1px">
        左右上边框
    </div>
</div>
```

``` html
<div class="border-right-1px border-left-1px">
    <div class="border-bottom-1px">
        左右下边框
    </div>
</div>
```

#### 两条边

``` html
<div class="border-top-1px border-bottom-1px">
    上下边框
</div>
```

``` html
<div class="border-right-1px border-left-1px">
    左右边框
</div>
```

``` html
<div class="border-top-1px">
    <div class="border-left-1px">
        左上边框
    </div>
</div>
```

``` html
<div class="border-top-1px border-right-1px">
    右上边框
</div>
```

``` html
<div class="border-bottom-1px">
    <div class="border-right-1px">
        右下边框
    </div>
</div>
```

``` html
<div class="border-bottom-1px border-left-1px">
    左下边框
</div>
```

#### 一条边

``` html
<div class="border-top-1px">
    上边框
</div>
```

``` html
<div class="border-right-1px">
    右边框
</div>
```

``` html
<div class="border-bottom-1px">
    下边框
</div>
```

``` html
<div class="border-left-1px">
    左边框
</div>
```

### 项目结构说明

`demo/index.html` 示例
`dist/impony-1px-border.css` 压缩后的 CSS
`src/impony-1px-border.css` CSS 源文件
`.gitignore Git` 项目忽略列表
`gulpfile.js` 压缩脚本
`package.json` 依赖关系
`README.md` 项目说明

### 许可证

GPL v3