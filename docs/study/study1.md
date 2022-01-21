---
# date是手动设置此篇文章编写的时间
date: "2022/1/20 20:23"

# 手动设置此篇文章封面
coverUrl: "http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202109/3d05c59d86ea52290cd9053919476cf8--2885164731.jpg"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 设置keyword,设置keyword,设置keyword,设置keyword

# 设置description
description: 数组扁平化且删除重复数据

# 手动设置标题，否则使用h1标签作为标题
title: 扁平化

# 这是设置标签，数组形式
tag: [面试题]

# 这里设置类别，数组形式
categories: [Javascript]
---

# 题目示例：
已知如下数组：


```js
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
```
编写一个程序将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组。
## 实现方法

```js
Array.from(new Set(arr.flat(`Infinity`))).sort((a,b)=>{ return a-b})
```
- ` flat()  ` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。`flat`的语法：
> var newArray = arr.flat([depth])\
> `depth` 指定要提取嵌套数组的结构深度，默认值为 1。
- 全局属性 `Infinity` 是一个数值，表示无穷大。
- `Set`中的元素只会**出现一次**，即 Set 中的元素是唯一的。
- ` Array.from()  ` 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
- ` sort()  ` 对数组的元素进行排序，并返回数组。
### 扩展：手写flat
此处仅列举几种简单易懂的方法：\
\
`instanceof`递归实现：
```js
function myflat1(arr){
    let res = []
    function bp(arr)  {
        let len = arr.length
        for(let i = 0;i < len; i++){
            if( arr[i] instanceof Array){     // 判断该元素是否为数组
                let a = [...arr[i]]           // 如果是数组  对其进行结构  再进行递归
                bp(a)
            }else{
                res.push(arr[i])            // 元素不为数组时 push到res数组里
            }
        }
    }
    bp(arr)
    return res
}
```
转字符串切割：

```js
function myflat2(arr){
    arr = arr.toString()         // 将数组进行字符串转换
    arr = arr.split(',')         // split()方法将字符串进行分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
    for(let i = 0,len = arr.length;i < len; i++){ 
        arr[i] = Number(arr[i])  // 将字符串数组的元素转换成Number类型
    }
    return arr
}
```
基于`Array.isArray`的`while`循环

```js
function myflat3(arr) {
    while (arr.some(Array.isArray)) {     
        // Array.isArray() 用于确定传递的值是否是一个Array  
        //some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试
        arr = [].concat(...arr)  
    }
    return arr
}
```