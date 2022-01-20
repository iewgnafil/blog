<template><h1 id="javascript-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-数据类型" aria-hidden="true">#</a> JavaScript 数据类型</h1>
<p>值类型（基本类型）有7种，分别是</p>
<ul>
<li>undefined</li>
<li>null</li>
<li>Boolean</li>
<li>String</li>
<li>Number</li>
<li>Symbol(ES6新增)</li>
<li>BigInt(ES10新增)</li>
</ul>
<p>引用类型：</p>
<ul>
<li>Object</li>
<li>Array</li>
<li>function</li>
<li>Set</li>
<li>Map</li>
<li>WeakMap</li>
<li>WeakSet</li>
<li>RegExp</li>
<li>Date</li>
<li>Math…</li>
</ul>
<h1 id="拓展-javascript-是一种动态弱类型语言。" tabindex="-1"><a class="header-anchor" href="#拓展-javascript-是一种动态弱类型语言。" aria-hidden="true">#</a> 拓展：JavaScript 是一种动态弱类型语言。</h1>
<p>这意味着相同的变量可用作不同的类型：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x<span class="token punctuation">;</span>               <span class="token comment">// x 为 undefined</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>           <span class="token comment">// 现在 x 为数字</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span>      <span class="token comment">// 现在 x 为字符串</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="了解强、弱类型和动态、静态类型语言" tabindex="-1"><a class="header-anchor" href="#了解强、弱类型和动态、静态类型语言" aria-hidden="true">#</a> 了解强、弱类型和动态、静态类型语言</h2>
<h3 id="强类型" tabindex="-1"><a class="header-anchor" href="#强类型" aria-hidden="true">#</a> 强类型</h3>
<ul>
<li>语言层面限制函数的实参类型必须与形参类型相同</li>
<li>强类型语言中不允许任意的隐式类型转换</li>
</ul>
<h3 id="弱类型" tabindex="-1"><a class="header-anchor" href="#弱类型" aria-hidden="true">#</a> 弱类型</h3>
<ul>
<li>弱类型语言层面不会限制实参的类型</li>
<li>弱类型语言允许任意的数据隐式类型转换</li>
</ul>
<h3 id="静态类型" tabindex="-1"><a class="header-anchor" href="#静态类型" aria-hidden="true">#</a> 静态类型</h3>
<p>一个变量声明时它的类型就是明确的，声明过后它的类型不再允许修改</p>
<h3 id="动态类型" tabindex="-1"><a class="header-anchor" href="#动态类型" aria-hidden="true">#</a> 动态类型</h3>
<ul>
<li>
<p>运行阶段才能够明确变量类型，变量的类型随时可以改变</p>
</li>
<li>
<p>动态类型语言中的变量没有类型，变量中存放的值才有类型</p>
</li>
</ul>
<h1 id="基本数据类型和引用数据类型的存储方式" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用数据类型的存储方式" aria-hidden="true">#</a> 基本数据类型和引用数据类型的存储方式：</h1>
<h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2>
<p>基本数据类型存储在<strong>栈内存</strong>，存储的是<strong>值</strong>。</p>
<blockquote>
<p>原始类型存储的都是值，是没有函数可以调用的。</p>
</blockquote>
<h2 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h2>
<p>引用数据类型的值存储在<strong>堆内存</strong>，<strong>地址指针</strong>（该指针指向堆中的该实体）存储在栈内存。</p>
<blockquote>
<p>之所以引用数据类型存储在堆内存中，是因为引用数据类型占据空间大、占用内存不固定。 如果存储在栈中，将会影响程序运行的性能。</p>
</blockquote>
<h3 id="引用类型的检索" tabindex="-1"><a class="header-anchor" href="#引用类型的检索" aria-hidden="true">#</a> 引用类型的检索</h3>
<p>当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体；所以当我们把对象赋值给另外一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变时，另一个对象也会变化。上述的赋值行为发生<strong>浅拷贝</strong>：拷贝的是栈中的内存地址，所以如果其中一个对象改变了这个地址里的值，就会影响到另一个对象。</p>
<h2 id="拓展-深浅拷贝" tabindex="-1"><a class="header-anchor" href="#拓展-深浅拷贝" aria-hidden="true">#</a> 拓展：深浅拷贝</h2>
<p>在JavaScript中，基本类型 值的复制是直接拷贝一份新的一模一样的数据，这两份数据相互独立，互不影响。而引用类型值的复制则为传递对象的引用，则需要考虑深浅拷贝的问题。</p>
<ul>
<li>深拷贝：创建一个新的对象，将一个对象从内存中<strong>完整地拷贝</strong>出来一份给该新对象，并从<strong>堆内存中开辟一个全新的空间存放新对象</strong>，且新对象的修改并不会改变原对象。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>       
<span class="token comment">// arr.slice()    // [...arr]     //[].concat(arr)    皆可实现数组的深拷贝</span>
<span class="token comment">// JSON.parse(JSON.stringify(arr))  先将arr变成字符串  然后再将arr变成对象</span>

arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// [1, 2, 3, 4, 5]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>浅拷贝：创建一个新的对象，来接收你要拷贝的对象的值，复制的是<strong>栈内存中存放的的地址</strong>，所以两者指向的<strong>仍然是堆里的同一个对象</strong>，所以如果其中一个对象改变了栈内存中存放的地址所指向的对象，就会影响到另一个对象。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'小明'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> c
c<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// { name: '小明', age: 19 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="手写方法实现深拷贝" tabindex="-1"><a class="header-anchor" href="#手写方法实现深拷贝" aria-hidden="true">#</a> 手写方法实现深拷贝：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">like</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sport</span><span class="token operator">:</span> <span class="token string">'running'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">food</span><span class="token operator">:</span> <span class="token string">'beef'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>     <span class="token comment">// 判断是否为Array  来判断创建n的数据类型</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// 判断是自己的  还是原型上继承下来的</span>
            n<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span>    
            <span class="token comment">// 判断item是否还是对象或数组</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token keyword">let</span> newPerson <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
person<span class="token punctuation">.</span>like<span class="token punctuation">.</span>sport <span class="token operator">=</span> <span class="token string">'swimming'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// { name: '小明', age: 18, like: { sport: 'running', food: 'beef' } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// { name: '小明', age: 18, like: { sport: 'swimming', food: 'beef' } }</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="判断数据类型的方法" tabindex="-1"><a class="header-anchor" href="#判断数据类型的方法" aria-hidden="true">#</a> 判断数据类型的方法</h1>
<h2 id="typeof方法" tabindex="-1"><a class="header-anchor" href="#typeof方法" aria-hidden="true">#</a> typeof方法</h2>
<p>可以通过typeof检测基本类型和引用类型，不过检测出来的引用类型都是对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> <span class="token number">123</span><span class="token punctuation">,</span>     <span class="token comment">//number</span>
    <span class="token keyword">typeof</span> <span class="token string">'abc'</span><span class="token punctuation">,</span>   <span class="token comment">//string</span>
    <span class="token keyword">typeof</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">//boolean</span>
    <span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">//undefined</span>
    <span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">//object</span>
    <span class="token keyword">typeof</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'aaa'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// function</span>
    <span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//object</span>
    <span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//object</span>
    <span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span>   <span class="token comment">//object</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>首先 <strong>typeof</strong> 能够正确的判断基本数据类型，但除了null, <strong>typeof null所输出的为object</strong>。
但是对于对象来说，<code>typeof</code>也不能正确的判断其类型， 如<code>typeof</code>一个函数可以输出 <code>function</code>,而除此之外，输出的全是<code> object</code>,这种情况下，我们无法准确的知道对象的类型。</p>
<h2 id="拓展-为什么null返回的是一个object呢" tabindex="-1"><a class="header-anchor" href="#拓展-为什么null返回的是一个object呢" aria-hidden="true">#</a> 拓展：为什么null返回的是一个object呢？</h2>
<p>js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息</p>
<ul>
<li>000：对象</li>
<li>010：浮点数</li>
<li>100：字符串</li>
<li>110：布尔</li>
<li>1：整数
在JS的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 <code>null</code> 表示为全零，所以typeof错误的将它判断为 <code>object</code> 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。</li>
</ul>
<h4 id="null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-的区别" aria-hidden="true">#</a> null 和 undefined 的区别：</h4>
<ul>
<li><code>null</code> 是 javascript 的关键字，表示一个特殊值，常用来描述&quot;空值&quot;，typeof 运算返回&quot;object&quot;。</li>
<li><code>undefined</code> 是预定义的全局变量，他的值就是&quot;未定义&quot;， typeof 运算返回 &quot;undefined&quot;</li>
<li><code>undefined</code> 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。</li>
<li>相对来说，null更接近其他语言的空、而undefined则是js特有的机制</li>
</ul>
<h2 id="instanceof方法" tabindex="-1"><a class="header-anchor" href="#instanceof方法" aria-hidden="true">#</a> instanceof方法</h2>
<p>由上可知<code>typeof</code>来判断引用类型是不准确的，故想要检测引用类型可以通过 <strong>instanceof</strong></p>
<pre><code>语法：object instanceof constructor（object为实例对象，constructor为构造函数）
</code></pre>
<p>关于<strong>instanceof</strong> 的实现原理的理解，可参考下面的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">instance_of</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> leftVal <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
    <span class="token keyword">let</span> rightVal <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>leftVal <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>leftVal <span class="token operator">===</span> rightVal<span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token boolean">true</span>
        leftVal <span class="token operator">=</span> leftVal<span class="token punctuation">.</span>__proto__
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">instance_of</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>Array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>由此可知<code>instanceof</code>是顺着<strong>原型链</strong>去找，直到找到相同的原型对象，返回true，否则为false。</p>
<p><strong>instanceof</strong>可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型</p>
</template>
