## impony-1px-border 0.1.0

可以在项目中方便的使用1像素边框
[点击这里查看在线演示](http://impony.com/impony-1px-border/demo)

### 项目结构说明

```
demo/
  └ index.html 示例
dist/
  └ impony-1px-border.css 压缩后的 CSS
src/
  └ impony-1px-border.css CSS 源文件
.gitignore Git 项目忽略列表
gulpfile.js 压缩脚本
package.json 依赖关系
README.md 项目说明
```

### 使用方法

在项目中引用 dist 目录下的那个 CSS 文件即可

``` html
<link href="impony-1px-border.css" rel="stylesheet" />
```

### 具体 HTML 结构

``` html
<div class="impony-1px-border impony-top">
    上边框
</div>
```

``` html
<div class="impony-1px-border impony-right">
    右边框
</div>
```

``` html
<div class="impony-1px-border impony-bottom">
    下边框
</div>
```

``` html
<div class="impony-1px-border impony-left">
    左边框
</div>
```

``` html
<div class="impony-1px-border impony-top impony-bottom">
    上下边框
</div>
```

``` html
<div class="impony-1px-border impony-right impony-left">
    左右边框
</div>
```

``` html
<div class="impony-1px-border impony-top">
    <div class="impony-1px-border impony-left">
        左上边框，其它组合类似
    </div>
</div>
```

``` html
<div class="impony-1px-border impony-top impony-bottom">
    <div class="impony-1px-border impony-right impony-left">
        上下左右边框
    </div>
</div>
```

### 协议

GPL v3