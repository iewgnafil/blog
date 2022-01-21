---
# date是手动设置此篇文章编写的时间
date: "2022/1/20 20:23"

# 手动设置此篇文章封面
coverUrl: "http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202109/ac3990b3d19dd512dd6f6a364e70848a--1897315302.jpg"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 设置keyword,设置keyword,设置keyword,设置keyword

# 设置description
description: 输出什么

# 手动设置标题，否则使用h1标签作为标题
title: 输出什么

# 这是设置标签，数组形式
tag: [面试题]

# 这里设置类别，数组形式
categories: [Javascript]
---

### map
`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。


```js
var new_array = arr.map(function callback(currentValue[,index[, array]]) {
 // Return element for new_array
 }[, thisArg])
```
可以看到`callback`回调函数需要三个参数, 我们通常只使用第一个参数 (其他两个参数是可选的)。\
`currentValue` 是callback 数组中正在处理的当前元素。\
`index`可选, 是callback 数组中正在处理的当前元素的索引。\
`array`可选, 是callback map 方法被调用的数组。\
另外还有`thisArg`可选, 执行 callback 函数时使用的this 值。

```js
const arr = [1, 2, 3];
arr.map((num) => num + 1); // [2, 3, 4]
```
### parseInt
`parseInt()` 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。

```js
const intValue = parseInt(string[, radix]);
```
`string` 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。

`radix` 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。\
`返回值` 返回一个整数或NaN

```js
parseInt(100); // 100
parseInt(100, 10); // 100
parseInt(100, 2); // 4 -> 将100视为2进制下的显示  则为4
```

### 回到真实的事例上

回到我们真实的事例上

```js
['1', '2', '3'].map(parseInt)
```
对于每个迭代`map`, `parseInt()`传递两个参数: **字符串和基数**。\
所以实际执行的的代码是：

```js
['1', '2', '3'].map((item, index) => {
	return parseInt(item, index)
})
```
即返回的值分别为：

```js
parseInt('1', 0) // 1
parseInt('2', 1) // NaN
parseInt('3', 2) // NaN, 3 不是二进制
```
所以：

```js
['1', '2', '3'].map(parseInt)
// 1, NaN, NaN
```