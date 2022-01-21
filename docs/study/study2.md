---
# date是手动设置此篇文章编写的时间
date: "2022/1/20 20:23"

# 手动设置此篇文章封面
coverUrl: "https://www.toopic.cn/public/uploads/small/1634265816194163426581671.jpg"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 设置keyword,设置keyword,设置keyword,设置keyword

# 设置description
description: 什么是防抖和节流？有什么区别？如何实现？

# 手动设置标题，否则使用h1标签作为标题
title: 防抖和节流

# 这是设置标签，数组形式
tag: [面试题]

# 这里设置类别，数组形式
categories: [Javascript]
---

1.  **防抖**

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

-   思路：

> 每次触发事件时都取消之前的延时调用方法

```js
function debounce(fn,delay) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          fn.apply(this, arguments);  //加了apply，此时this为debounce的
        }, delay);     // delay为事件触发时间间隔
      };
    }
```
2.  **节流**

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

-   思路：

> 每次触发事件时都判断与前一次执行是否间隔事件大于n秒

```js
function throttle(fn, delay){
    let time = 0
    return function(){
        let now = Date.now();     // 每次点击都记录此时的时间戳
        //console.log(now);
        if(now - time >= delay){ //点击时的时间相比较前一次点击  至少要相差delay时间  否则不执行
            fn.apply(this,arguments) //加了apply，此时this为throttle的 
        }
        time = Date.now()     // 触发事件之后，更新此时的时间，用于下一次的判断
    }
}
```