---
# date是手动设置此篇文章编写的时间
date: "2022/1/21 20:23"

# 手动设置此篇文章封面
coverUrl: "http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202201/ec75de816ec1a1e965b9604a936e5c3e--333631415.jpg"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 跨域,jsonp,cros,postMessage

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


## 特别说明
1. 如果是端口和协议照成的跨域，前端是没有办法解决的
2. 跨域仅仅只是根据url的首部 来识别，不会根据这个首部对应得ip地址来判断
3. 跨域并不是请求没有发出去，请求时能发出去得，服务器也是能响应的，只是响应结果被浏览器拦截了


## 跨域的解决方案
### 1. jsonp
  原理：**利用script标签上的src属性不会被同源的策略所拦截的这一机制**，将我们要请求的url地址，添加到script的src属性中，且携带上前端全局下的函数名作为参数给到后端，后端获取到前端传递的函数名，然后返回该函数的调用语法，将要返回的数据放在该函数的调用中作为参数，当浏览器接收到全局下的函数被调用的后端响应，会自动执行该函数，从而从参数中获取到后端返回的数据

  缺点：
  1. 需要对方的服务器做支持才可以
  2. 只支持**get** 请求，有局限性，可能会遭到 **XSS攻击**


### 2. cors
  cors是W3C的标准，它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求。也就是说浏览器发请求是不会被跨域的，跨域的核心是后端响应不了。

  >要让后端响应内容能够补被浏览器拦截，关键在于后端。如果后端也能遵从CorS标准的话，后端的响应也可以跨源.

分为简单请求和复杂请求两种：
  - 简单请求\
    . 使用GET、POST、HEAD \
    . Content-Type的值仅限于:**text/plain || multipart/from-data || application/x-www-from-urlencoded**

  - 复杂请求\
    .  不满足简单请求的条件的就是复杂请求\
    .  复杂请求的cors请求，会在正式通信之前，增加一次http查询请求，称为"预检"，预检是用来知道服务端是都允许跨域请求，预检请求发的是options方法

### 3. postMessage
  html5中的 xhr 提供的API，postMessage()方法允许来自不同源的脚本采用异步的方法进行有限通信，可以实现跨文本，多窗口，跨域消息传递 \
  可以解决这么几个问题：
  - 页面和其他新的窗口的数据传递
  - 多窗口之间的消息传递
  - 页面与嵌套的iframe消息传递
  - 上面三个场景的跨域数据传递


  otherWindow.postMessage(message, targrtOrigin, [transfer])
  - message: 要发送给其他window的数据
  - targetOrigin: 目标窗口
  - transfer(可选)和message一起传递的一个对象，这个对象的所有权限将移交给消息接收方

  缺点: **场景比较简单**