---
# date是手动设置此篇文章编写的时间
date: "2022/1/20 10:08"

# 手动设置此篇文章封面
coverUrl: "https://pic1.zhimg.com/80/v2-904505bcf0c424788f6028b8952aa2e7_1440w.jpg?source=1940ef5c"

# 是否置顶
sticky: true

# 设置keyword 多个以,分开
keyword: 设置keyword,设置keyword,设置keyword,设置keyword

# 设置description
description: JavaScript 数据类型种类、存储方式、判断方法

# 手动设置标题，否则使用h1标签作为标题
title: JavaScript数据类型的相关问题看这篇文章就够了

# 这是设置标签，数组形式
tag: [笔记]

# 这里设置类别，数组形式
categories: [Javascript]
---


# JavaScript 数据类型
值类型（基本类型）有7种，分别是 
- undefined
- null
- Boolean
- String
- Number
- Symbol(ES6新增)
- BigInt(ES10新增)

引用类型：
- Object
- Array
- function
- Set
- Map
- WeakMap
- WeakSet
- RegExp
- Date
- Math…
# 拓展：JavaScript 是一种动态弱类型语言。
这意味着相同的变量可用作不同的类型：

```js
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
```
## 了解强、弱类型和动态、静态类型语言
### 强类型

-   语言层面限制函数的实参类型必须与形参类型相同
-   强类型语言中不允许任意的隐式类型转换

### 弱类型

-   弱类型语言层面不会限制实参的类型
-   弱类型语言允许任意的数据隐式类型转换

### 静态类型

一个变量声明时它的类型就是明确的，声明过后它的类型不再允许修改

### 动态类型

- 运行阶段才能够明确变量类型，变量的类型随时可以改变

- 动态类型语言中的变量没有类型，变量中存放的值才有类型
# 基本数据类型和引用数据类型的存储方式：
## 基本数据类型
基本数据类型存储在**栈内存**，存储的是**值**。
> 原始类型存储的都是值，是没有函数可以调用的。
## 引用数据类型
引用数据类型的值存储在**堆内存**，**地址指针**（该指针指向堆中的该实体）存储在栈内存。
> 之所以引用数据类型存储在堆内存中，是因为引用数据类型占据空间大、占用内存不固定。 如果存储在栈中，将会影响程序运行的性能。
### 引用类型的检索
当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体；所以当我们把对象赋值给另外一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变时，另一个对象也会变化。上述的赋值行为发生**浅拷贝**：拷贝的是栈中的内存地址，所以如果其中一个对象改变了这个地址里的值，就会影响到另一个对象。
## 拓展：深浅拷贝
在JavaScript中，基本类型 值的复制是直接拷贝一份新的一模一样的数据，这两份数据相互独立，互不影响。而引用类型值的复制则为传递对象的引用，则需要考虑深浅拷贝的问题。

-   深拷贝：创建一个新的对象，将一个对象从内存中**完整地拷贝**出来一份给该新对象，并从**堆内存中开辟一个全新的空间存放新对象**，且新对象的修改并不会改变原对象。

```js
let arr = [1, 2, 3, 4, 5]
let arr2 =JSON.parse(JSON.stringify(arr))       
// arr.slice()    // [...arr]     //[].concat(arr)    皆可实现数组的深拷贝
// JSON.parse(JSON.stringify(arr))  先将arr变成字符串  然后再将arr变成对象

arr[0] = 0
console.log(arr2);      // [1, 2, 3, 4, 5]
```

-   浅拷贝：创建一个新的对象，来接收你要拷贝的对象的值，复制的是**栈内存中存放的的地址**，所以两者指向的**仍然是堆里的同一个对象**，所以如果其中一个对象改变了栈内存中存放的地址所指向的对象，就会影响到另一个对象。

```js
let c = {name:'小明', age: 18}
let d = c
c.age = 19
console.log(d);   // { name: '小明', age: 19 }
```

### 手写方法实现深拷贝：

```js
let person = {
    name: '小明',
    age: 18,
    like: {
        sport: 'running',
        food: 'beef'
    }
}

function deepCopy(obj) {
    let n = obj instanceof Array ? [] : {}     // 判断是否为Array  来判断创建n的数据类型
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {     // 判断是自己的  还是原型上继承下来的
            n[item] = obj[item] instanceof Object ? deepCopy(obj[item]) : obj[item]    
            // 判断item是否还是对象或数组
        }
    }
    return n
}

let newPerson = deepCopy(person)
person.like.sport = 'swimming'
console.log(newPerson);     // { name: '小明', age: 18, like: { sport: 'running', food: 'beef' } }
console.log(person);       // { name: '小明', age: 18, like: { sport: 'swimming', food: 'beef' } }

```



# 判断数据类型的方法
## typeof方法
可以通过typeof检测基本类型和引用类型，不过检测出来的引用类型都是对象：

```js
console.log(
    typeof 123,     //number
    typeof 'abc',   //string
    typeof false,   //boolean
    typeof undefined, //undefined
    typeof null, //object
    typeof function(){console.log('aaa');}, // function
    typeof new Date(), //object
    typeof [1,2,3], //object
    typeof {a:1,b:2,c:3}   //object
);
```
首先 **typeof** 能够正确的判断基本数据类型，但除了null, **typeof null所输出的为object**。
但是对于对象来说，`typeof`也不能正确的判断其类型， 如`typeof`一个函数可以输出 `function`,而除此之外，输出的全是` object`,这种情况下，我们无法准确的知道对象的类型。
## 拓展：为什么null返回的是一个object呢？
js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
-   000：对象
-   010：浮点数
-   100：字符串
-   110：布尔
-   1：整数
在JS的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 `null` 表示为全零，所以typeof错误的将它判断为 `object` 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

#### null 和 undefined 的区别：
- `null` 是 javascript 的关键字，表示一个特殊值，常用来描述"空值"，typeof 运算返回"object"。
- `undefined` 是预定义的全局变量，他的值就是"未定义"， typeof 运算返回 "undefined"
- `undefined` 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
- 相对来说，null更接近其他语言的空、而undefined则是js特有的机制
## instanceof方法
由上可知`typeof`来判断引用类型是不准确的，故想要检测引用类型可以通过 **instanceof**

    语法：object instanceof constructor（object为实例对象，constructor为构造函数）
    
关于**instanceof** 的实现原理的理解，可参考下面的代码：

```js
function instance_of (left, right){
    let leftVal = left.__proto__
    let rightVal = right.prototype
    while(true){
        if(leftVal === null) return false
        if(leftVal === rightVal)  return true
        leftVal = leftVal.__proto__
    }
}
let a = [1, 2, 3]
console.log(instance_of(a,Array));    // true
```
由此可知`instanceof`是顺着**原型链**去找，直到找到相同的原型对象，返回true，否则为false。

**instanceof**可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

