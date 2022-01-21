---
# date是手动设置此篇文章编写的时间
date: "2022/1/21 20:23"

# 手动设置此篇文章封面
coverUrl: "http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202107/1d1b3d851a75b9d500b731bea0286af8--2560511577.jpg"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 设置keyword,设置keyword,设置keyword,设置keyword

# 设置description
description: 跨域

# 手动设置标题，否则使用h1标签作为标题
title: 跨域

# 这是设置标签，数组形式
tag: [跨域,面试题]

# 这里设置类别，数组形式
categories: [跨域]
---

# 什么是跨域
浏览器都具有同源策略  --- 协议 + 域名 + 端口  都相同

http://   www   .    abc.com  :    8080   /    detail   \
 协议    子域名       主域名        端口        请求资源地址


 - 同源策略限制了ajax请求

 - 没有被同源策略所影响的三个标签
 ```js
   <img src="xxx> 
   <link href="xxx>
   <script src="xxx">
```
   

## 常见的跨域场景
http://www.a.com/a.js   \
http://www.a.com/b.js      同一个域名，允许通信


http://www.a.com/a.js     \
https://www.a.com/a.js     协议不同，跨域


http://www.a.com/a.js      \
http://script.a.com/a.js	 主域相同，子域不相同，跨域


## 特比说明
1. 如果是端口和协议照成的跨域，前端是没有办法解决的
2. 跨域仅仅只是根据url的首部 来识别，不会根据这个首部对应得ip地址来判断
3. 跨域斌不是请求没有发出去，请求时能发出去得，服务器也是能响应的，只是响应结果被浏览器拦截了


## 跨域的解决方案
1. jsonp  \
  原理：**利用script标签上的src属性不会被同源的策略所拦截的这一机制**，将我们要请求的url地址，添加到script的src属性中，且携带上前端全局下的函数名作为参数给到后端，后端获取到前端传递的函数名，然后返回该函数的调用语法，将要返回的数据放在该函数的调用中作为参数，当浏览器接收到全局下的函数被调用的后端响应，会自动执行该函数，从而从参数中获取到后端返回的数据

  缺点：
  1. 需要对方的服务器做支持才可以
  2. 只支持**get** 请求，有局限性，可能会遭到 XSS攻击