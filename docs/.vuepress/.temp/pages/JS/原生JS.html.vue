<template><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>当下的前端开发，三大框架三分天下，框架的简单、强大让我们欲罢不能，使用原生 <code>JavaScript</code> 越来越少。</p>
<p>但我认为 <code>JavaScript</code> 作为每一个前端工程师的立身之本，不止要学会，还要学好、学精，学再多遍都不为过。</p>
<p>另一方面，前端面试中，越来越重视原生 <code>JavaScript</code> 的考察，其所占比例也越来越高。</p>
<p>我抓取了牛客上今年的线上面试题和面经，大约 <code>500</code> 左右道题，原生 <code>JavaScript</code> 的难点(闭包，<code>eventLoop，this</code>，手撕原生JS)考察的频率非常高。</p>
<blockquote>
<p>完整的分析我还正在赶工中，希望大家到时候可以来支持一下。</p>
</blockquote>
<p>因此我决定整理<code>JavaScript</code>中容易忽视或者混淆的知识点，写一系列篇文章，以灵魂拷问的方式，系统且完整的带大家遨游原生 <code>JavaScript</code> 的世界，希望能给大家带来一些收获。</p>
<h2 id="js类型之问——概念与检测篇" tabindex="-1"><a class="header-anchor" href="#js类型之问——概念与检测篇" aria-hidden="true">#</a> JS类型之问——概念与检测篇</h2>
<h3 id="_1-js中的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1-js中的数据类型有哪些" aria-hidden="true">#</a> 1.JS中的数据类型有哪些？</h3>
<ol>
<li>基本数据类型：共有7种</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Boolean Number String <span class="token keyword">undefined</span> <span class="token keyword">null</span> Bigint Symbol
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Symbol</code> ： <code>ES6</code> 引入的一种新的原始值，表示独一无二的值，主要为了解决属性名冲突问题。</p>
<p><code>Bigint</code> ：<code>ES2020</code> 新增加，是比 <code>Number</code> 类型的整数范围更大。</p>
<ol>
<li>引用数据类型：1种</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Object对象</span><span class="token punctuation">(</span>包括普通Object、Function、Array、Date、RegExp、Math<span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-你真的懂typeof吗" tabindex="-1"><a class="header-anchor" href="#_2-你真的懂typeof吗" aria-hidden="true">#</a> 2.你真的懂typeof吗？</h3>
<ol>
<li>
<p><code>typeof</code>的作用？</p>
<p>区分数据类型，可以返回7种数据类型：<code>number、string、boolean、undefined、object、function</code> ，以及 <code>ES6</code> 新增的 <code>symbol</code></p>
</li>
<li>
<p><code>typeof</code> 能正确区分数据类型吗？</p>
<p>不能。对于原始类型，除 <code>null</code> 都可以正确判断；对于引用类型，除 <code>function</code> 外，都会返回 <code>&quot;object&quot;</code></p>
</li>
<li>
<p><code>typeof</code> 注意事项</p>
<ul>
<li><code>typeof</code> 返回值为 <code>string</code> 格式，注意类似这种考题: <code>typeof(typeof(undefined)) -&gt; &quot;string&quot;</code></li>
<li><code>typeof</code> 未定义的变量不会报错，返回 <code>&quot;undefiend&quot;</code></li>
<li><code>typeof(null) -&gt; &quot;object&quot;</code>: 遗留已久的 <code>bug</code></li>
<li><code>typeof</code>无法区别数组与普通对象: <code>typeof([]) -&gt; &quot;object&quot;</code></li>
<li><code>typeof(NaN) -&gt; &quot;number&quot;</code></li>
</ul>
</li>
<li>
<p>习题</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'123abc'</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token operator">+</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">undefined</span> <span class="token comment">// b未定义，返回undefined</span>
<span class="token keyword">undefined</span>
number <span class="token comment">// NaN 为number类型</span>
object
number <span class="token comment">// +a 类型转换为NaN</span>
boolean
string
string <span class="token comment">// typeof(null) -> "object"; typeof("object") -> "string"</span>
string
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-什么是instanceof-你能模拟实现一个instanceof吗" tabindex="-1"><a class="header-anchor" href="#_3-什么是instanceof-你能模拟实现一个instanceof吗" aria-hidden="true">#</a> 3.什么是instanceof？你能模拟实现一个instanceof吗？</h3>
<ol>
<li><code>instanceof</code> 判断对象的原型链上是否存在构造函数的原型。只能判断引用类型。</li>
<li><code>instanceof</code> 常用来判断 <code>A</code> 是否为 <code>B</code> 的实例</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// A是B的实例，返回true，否则返回false</span>
<span class="token comment">// 判断A的原型链上是否有B的原型</span>
<span class="token constant">A</span> instaceof <span class="token constant">B</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol>
<li>模拟实现 <code>instanceof</code></li>
</ol>
<p>思想：沿原型链往上查找</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">instance_of</span><span class="token punctuation">(</span><span class="token parameter">Case<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基本数据类型返回false</span>
    <span class="token comment">// 兼容一下函数对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>Case<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>Case<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token operator">||</span> Case <span class="token operator">==</span> <span class="token string">'null'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> CaseProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>Case<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查到原型链顶端，仍未查到，返回false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CaseProto <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 找到相同的原型</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CaseProto <span class="token operator">===</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        CaseProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>CaseProto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>测试：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">instance_of</span><span class="token punctuation">(</span>Array<span class="token punctuation">,</span> Object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'zc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> vipUser <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">instance_of</span><span class="token punctuation">(</span>vipUser<span class="token punctuation">,</span> User<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-如何区分数组与对象-使用instanceof判断数组可靠吗" tabindex="-1"><a class="header-anchor" href="#_4-如何区分数组与对象-使用instanceof判断数组可靠吗" aria-hidden="true">#</a> 4.如何区分数组与对象？使用instanceof判断数组可靠吗？</h3>
<ol>
<li><code>ES6</code> 提供的新方法 <code>Array.isArray()</code></li>
<li>如果不存在<code>Array.isArray()</code>呢？可以借助<code>Object.prototype.toString.call()</code> 进行判断，此方式兼容性最好</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span>isArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Array<span class="token punctuation">.</span><span class="token function-variable function">isArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'object'</span> 
               <span class="token operator">&amp;&amp;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'[object Array]'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol>
<li><code>instanceof</code> 判断</li>
</ol>
<p>判断方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果为true，则arr为数组</span>
arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>instanceof</code> 判断数组类型如此之简单，为何不推荐使用那？</p>
<p><code>instanceof</code> 操作符的问题在于，如果网页中存在多个 <code>iframe</code> ，那便会存在多个 <code>Array</code> 构造函数，此时判断是否是数组会存在问题。</p>
<p>更详细的内容可以参考博文：<a href="https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fweixin_42467709%2Farticle%2Fdetails%2F105302852" target="_blank" rel="noopener noreferrer">JavaScript为啥不用instanceof检测数组 <ExternalLinkIcon/></a></p>
<h3 id="_5-如何判断一个数是否为nan" tabindex="-1"><a class="header-anchor" href="#_5-如何判断一个数是否为nan" aria-hidden="true">#</a> 5.如何判断一个数是否为NaN？</h3>
<p><code>NaN</code> 有个非常特殊的特性， <code>NaN</code> 与任何值都不相等，包括它自身</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>鉴于这个独特的特性，可以手撕一个比较简单的判断函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">!=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>全局函数 <code>isNaN</code> 方法：不推荐使用。<code>MDN</code> 对它的介绍是：<code>isNaN</code> 函数内包含一些非常有趣的规则。</li>
</ul>
<p>但为了避免一些面试官出一些冷门题目，咱们来稍微了解一下 <code>isNaN</code> 的有趣机制：会先判断参数是不是 <code>Number</code> 类型，如果不是 <code>Number</code> 类型会尝试将这个参数转换为 <code>Number</code> 类型，之后再去判断是不是 <code>NaN</code> 。</p>
<p>举个例子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 为什么对象会带来三种不同的结果</span>
<span class="token comment">// 是不是很有趣</span>
<span class="token comment">// 具体原因可以参考类型转换篇</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>isNaN</code> 的结果很大程度上取决于 <code>Number()</code> 类型转换的结果，关于 <code>Number</code> 的转换结果，后面会专门有一部分来介绍。</p>
<ul>
<li><code>Number.isNaN</code> (推荐使用)</li>
</ul>
<p>与 <code>isNaN()</code> 相比，<code>Number.isNaN()</code> 不会自行将参数转换成数字，只有在参数是值为 <code> NaN</code> 的数字时，才会返回 <code>true</code>。</p>
<h3 id="_6-如何实现一个功能完善的类型判断函数" tabindex="-1"><a class="header-anchor" href="#_6-如何实现一个功能完善的类型判断函数" aria-hidden="true">#</a> 6.如何实现一个功能完善的类型判断函数？</h3>
<p><code>Object.prototype.toString.call([value])</code> ，可以精准判断数据类型，因此可以根据这个原理封装一个自己的 <code>type</code> 方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment">// [object Function]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>           <span class="token comment">// [object Object]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>           <span class="token comment">// [object Array]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>           <span class="token comment">// [object String]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>           <span class="token comment">// [object Number]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>    <span class="token comment">// [object undefined]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>         <span class="token comment">// [object null]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">)</span>     <span class="token comment">// [object Date]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span>         <span class="token comment">// [object Math]</span>
<span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>       <span class="token comment">// [object Window]</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="js类型之问——类型转换篇" tabindex="-1"><a class="header-anchor" href="#js类型之问——类型转换篇" aria-hidden="true">#</a> JS类型之问——类型转换篇</h2>
<h3 id="_7-tostring-和-valueof-方法有什么区别" tabindex="-1"><a class="header-anchor" href="#_7-tostring-和-valueof-方法有什么区别" aria-hidden="true">#</a> 7.toString 和 valueOf 方法有什么区别？</h3>
<ol>
<li>基础：这两个方法属于 <code>Object</code> 对象，是为了解决 <code>JavaScript</code> 值运算与显示的问题。为了更适合自身功能，很多 <code>JavaScript</code> 内置对象都重写了这两个方法。</li>
<li><code>toString()</code>: 返回当前对象的字符串形式；<code>valueOf()</code> : 返回该对象的原始值</li>
<li>各个类型下两个方法返回值情况对比</li>
</ol>
<table>
<thead>
<tr>
<th>类型</th>
<th>valueOf</th>
<th>toString</th>
</tr>
</thead>
<tbody>
<tr>
<td>Array[1,2,3]</td>
<td>数组本身[1, 2, 3]</td>
<td>1,2,3</td>
</tr>
<tr>
<td>Object</td>
<td>对象本身</td>
<td>[object Object]</td>
</tr>
<tr>
<td>Boolean类型</td>
<td>Boolean值</td>
<td>&quot;true&quot;或&quot;false&quot;</td>
</tr>
<tr>
<td>Function</td>
<td>函数本身</td>
<td>function fnName(){code}</td>
</tr>
<tr>
<td>Number</td>
<td>数值</td>
<td>数值的字符换表示</td>
</tr>
<tr>
<td>Date</td>
<td>毫米格式时间戳</td>
<td>GMT格式时间字符串</td>
</tr>
</tbody>
</table>
<ol>
<li>
<p>调用优先级</p>
<p><strong>隐式转换时会自动调用 <code>toString</code> 和 <code>valueOf</code> 方法</strong>，两者优先级如下：</p>
<ul>
<li>强制转化为字符串类型时，优先调用 <code>toString</code> 方法</li>
<li>强制转换为数值类型时，优先调用 <code>valueOf</code> 方法</li>
<li>使用运算符操作符情况下，<code>valueOf</code> 优先级高于 <code>toStirng</code></li>
<li>对象的类型转换见下一问。</li>
</ul>
</li>
</ol>
<h3 id="_8-你知道对象转换成原始值是什么流程吗-toprimitive" tabindex="-1"><a class="header-anchor" href="#_8-你知道对象转换成原始值是什么流程吗-toprimitive" aria-hidden="true">#</a> 8.你知道对象转换成原始值是什么流程吗 (ToPrimitive)？</h3>
<p>对象转换成原始类型，会调用内置的 <code>[ToPrimitive]</code>函数</p>
<p>(参考博客: <a href="https://juejin.cn/post/6988387082536222734#heading-8" target="_blank" rel="noopener noreferrer">从ECMA规范彻底理解 JavaScript 类型转换<ExternalLinkIcon/></a>)</p>
<ul>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ToPrimitive
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>方法接受两个参数，一个是输入的值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>input
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>，一个是期望转换的类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PreferredType
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>如果未传入 <code>PreferredType</code> 参数，让 <code>hint</code> 等于 <code>'default'</code>，后面会将 <code>hint</code> 修改为 <code>'number'</code></li>
<li>如果 <code>PreferredType</code> 是 <code>hint String</code>，让 <code>hint</code> 等于 <code>'string'</code></li>
<li>如果 <code>PreferredType</code> 是 <code>hint Number</code>，让 <code>hint</code> 等于 <code>'number'</code></li>
<li>返回 <code>OrdinaryToPrimitive(input, hint)</code></li>
</ol>
</li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>OrdinaryToPrimitive(input, hint)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>如果 <code>hint</code> 是 <code>'string'</code>，那么就将 <code>methodNames</code> 设置为 <code>toString、valueOf</code></li>
<li>如果 <code>hint</code> 是 <code>'number'</code>，那么就将 <code>methodNames</code> 设置为 <code>valueOf、toString</code></li>
</ol>
</li>
</ul>
<blockquote>
<p><code>methodName</code> 存储的就是当前 <code>preferredType</code> 下的调用优先级，如果全部调用完毕仍然未转化为原始值，会发生报错。</p>
</blockquote>
<h3 id="_9-你能做出下面这个题吗" tabindex="-1"><a class="header-anchor" href="#_9-你能做出下面这个题吗" aria-hidden="true">#</a> 9.你能做出下面这个题吗？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>有了第七问和第八问的知识，这个题目就不难了。 <code>JavaScript</code> 对象的键必须是字符串，因此分别需要将对象 <code>a</code> 和 <code>b</code> 转换为 <code>string</code> 类型。具体转换流程：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.执行ToPrimitive</span>
<span class="token comment">// hint 为 string</span>
<span class="token function">ToPrimitive</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">'hint String'</span><span class="token punctuation">)</span>
<span class="token comment">// 2.执行OrdinaryToPrimitive</span>
<span class="token function">OrdinaryToPrimitive</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">'string'</span><span class="token punctuation">)</span>
<span class="token comment">// 3.返回methodNames</span>
methodNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'toString'</span><span class="token punctuation">,</span> <span class="token string">'valueOf'</span><span class="token punctuation">]</span>
<span class="token comment">// 4.调用methodNames里方法</span>
<span class="token comment">// 调用toString</span>
a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回[object Object]</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>对象 <code>a</code> 和 <code>b</code> 转换后的结果都是 <code>[object Object]</code>，<code>obj</code> 对象上只添加了一个属性 <code>[object Object]</code>。</p>
<p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">200</span>
<span class="token number">200</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_10-你能理清类型转换吗" tabindex="-1"><a class="header-anchor" href="#_10-你能理清类型转换吗" aria-hidden="true">#</a> 10.你能理清类型转换吗？</h3>
<p>首先需要知道：在<code>JavaScript</code>中，只有<strong>三种类型</strong>的转换</p>
<ul>
<li>转换为<code>Number</code>类型: <code>Number() / parseFloat() / parseInt()</code></li>
<li>转化为<code>String</code>类型:<code> String() / toString()</code></li>
<li>转化为<code>Boolean</code>类型: <code>Boolean()</code></li>
</ul>
<p>因此遇到类型转换问题，只需要弄清楚在<strong>什么场景</strong>之下转换成<strong>那种类型</strong>即可。</p>
<h4 id="转换为boolean" tabindex="-1"><a class="header-anchor" href="#转换为boolean" aria-hidden="true">#</a> 转换为boolean</h4>
<ul>
<li>显式：<code>Boolean</code> 方法可以显式将值转换为布尔类型</li>
<li>隐式：通常在逻辑判断或者有逻辑运算符时触发（<code>|| &amp;&amp; !</code>）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment">// 显式类型转换</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">// 逻辑判断类型触发隐式转换</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token number">1</span>          <span class="token comment">// 逻辑运算符触发隐式转换</span>
<span class="token number">1</span> <span class="token operator">||</span> <span class="token string">'hello'</span> <span class="token comment">// 逻辑运算符触发隐式转换</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>boolean</code> 类型只有 <code>true</code> 和 <code>false</code> 两种值。</p>
<p>除值 <strong>0,-0,null,NaN,undefined,或空字符串（&quot;&quot;）</strong> 为 <code>false</code> 外，其余全为 <code>true</code></p>
<h4 id="转化为string" tabindex="-1"><a class="header-anchor" href="#转化为string" aria-hidden="true">#</a> 转化为string</h4>
<ul>
<li>显式：<code>String</code> 方法可以显式将值转换为字符串</li>
<li>隐式：<code>+</code> 运算符有一侧操作数为 <code>string</code> 类型时</li>
</ul>
<p>转化为 <code>string</code> 类型的本质：<strong>需要转换为string的部分调用自身的toString方法(null/undefined返回字符串格式的null和undefined)</strong></p>
<blockquote>
<p>当被转换值为对象时，相当于执行 <code>ToPrimitive(input, 'hint String')</code></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1,2,3</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [object Object]</span>

<span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'1'</span> <span class="token comment">// 11</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 1[object Object]</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="转化为number" tabindex="-1"><a class="header-anchor" href="#转化为number" aria-hidden="true">#</a> 转化为number</h4>
<ul>
<li>显式：<code>Number</code> 方法可以显式将值转化为数字类型</li>
</ul>
<p><code>Number</code> 的具体规则，<code>ES5</code> 规范中给了一个<a href="https://link.juejin.cn?target=http%3A%2F%2Fes5.github.io%2F%23x9.3" target="_blank" rel="noopener noreferrer">对应的结果表<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>类型</th>
<th>结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>undefined</td>
<td>NaN</td>
</tr>
<tr>
<td>null</td>
<td>+0</td>
</tr>
<tr>
<td>Boolean</td>
<td>NaN</td>
</tr>
<tr>
<td>undefined</td>
<td>参数为true返回1；false返回+0</td>
</tr>
<tr>
<td>Number</td>
<td>返回与之相等的值</td>
</tr>
<tr>
<td>String</td>
<td>有些复杂，举例说明</td>
</tr>
<tr>
<td>Object</td>
<td>先执行ToPrimitive方法，在执行Number类型转换</td>
</tr>
</tbody>
</table>
<ol>
<li><code>String</code>: 空字符串返回 <code>0</code>，出现任何一个非有效数字字符，返回 <code>NaN</code></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"1 3"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"1a"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"0x11"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 17</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"-123"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"1.2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1.2</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>
<p>隐式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>number
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>的隐式类型转换比较复杂，对需要隐式转换的部分执行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Number
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>：</p>
<ul>
<li>比较操作(<code>&lt;, &gt;, &lt;=, &gt;=</code>)</li>
<li>按位操作(<code>| &amp; ^ ~</code>)</li>
<li>算数操作(<code>+ - * / %</code>) 注意：<strong>+的操作数存在字符串时，为string转换</strong></li>
<li>一元 <code>+-</code> 操作</li>
</ul>
</li>
</ul>
<h3 id="_11-的隐式转换规则" tabindex="-1"><a class="header-anchor" href="#_11-的隐式转换规则" aria-hidden="true">#</a> 11.== 的隐式转换规则</h3>
<ol>
<li><code>==</code>: 只需要值相等，无需类型相等；<code>null, undefined</code> 在 <code>==</code> 下互相等且自身等</li>
<li><code>==</code> 的转换规则:</li>
</ol>
<table>
<thead>
<tr>
<th>被比较数B</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td>Number</td>
<td>String</td>
<td>Boolean</td>
<td>Object</td>
</tr>
<tr>
<td>比较数A</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Number</td>
<td>A == B</td>
<td>A == ToNumber(B)</td>
<td>A == ToNumber(B)</td>
<td>A == ToPrimitive(B)</td>
<td></td>
</tr>
<tr>
<td>String</td>
<td>ToNumber(A) == B</td>
<td>A == B</td>
<td>ToNumber(A) == ToNumber(B)</td>
<td>ToPrimitive(B) == A</td>
<td></td>
</tr>
<tr>
<td>Boolean</td>
<td>ToNumber(A) == B</td>
<td>ToNumber(A) == ToNumber(B)</td>
<td>ToNumber(A) == ToNumber(B)</td>
<td>ToNumber(A) == ToPrimitive(B)</td>
<td></td>
</tr>
<tr>
<td>Object</td>
<td>ToPrimitive(A) == B</td>
<td>ToPrimitive(A) == B</td>
<td>ToPrimitive(A) == ToPrimitive(B)</td>
<td>A === B</td>
<td></td>
</tr>
</tbody>
</table>
<p>在上面的表格中，<code>ToNumber(A)</code> 尝试在比较前将参数 <code>A</code> 转换为数字。<code>ToPrimitive(A)</code> 将参数 <code>A</code> 转换为原始值( <code>Primitive</code> )。</p>
<h3 id="_12-1-与-1的输出结果分别是什么" tabindex="-1"><a class="header-anchor" href="#_12-1-与-1的输出结果分别是什么" aria-hidden="true">#</a> 12.<code>1 + {}</code> 与 <code>{} + 1</code>的输出结果分别是什么？</h3>
<p>通过上面的学习，当对象与其他元素相加时，对象会调用 <code>toPrimitive</code> 转化为原始值：</p>
<ol>
<li>执行 <code>toPrimitive</code>，未传入 <code>PreferredType</code>，<code>methodNames</code> 为 <code>[valueOf, toString]</code></li>
<li>执行 <code>({}).valueOf</code>，返回对象本身 <code>{}</code>，不是原始值</li>
<li>继续执行 <code>({}).toString()</code>，返回 <code>&quot;[object Object]&quot;</code>，返回结果为原始值，转换结束</li>
</ol>
<p>此时 <code>1 + {}</code>，右侧为 <code>string</code> 类型，将 <code>1</code> 进行 <code>ToString()</code> 转化为 <code>&quot;1&quot;</code> ，最后字符串连接，结果为 <code>&quot;1[object Object]&quot;</code></p>
<p><strong>注意</strong>： <code>{} + 1</code> 输出的结果会和 <code>1 + {}</code> 一样吗？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{}` 在 `JavaScript` 中，不止可以作为对象定义，也可以作为代码块的定义。`js` 引擎会把 `{} + 1` 解析成**1个代码块和1个+1**，最终输出结果为 `1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">[</span>object Object<span class="token punctuation">]</span>
<span class="token number">1</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_13-与-的相加的结果是多少" tabindex="-1"><a class="header-anchor" href="#_13-与-的相加的结果是多少" aria-hidden="true">#</a> 13.[]与{}的相加的结果是多少？</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <code>[] + {}</code></h4>
<p>数组是特殊的对象，需要调用 <code>toPrimitive</code>，转换为原始值</p>
<ul>
<li>执行 <code>toPrimitive</code>，未传入 <code>PreferredType</code>，<code>methodNames</code> 为 <code>[valueOf, toString]</code></li>
<li>执行 <code>[].valueOf</code>，返回数组本身</li>
<li>执行 <code>[].toString</code>，返回空字符串 <code>''</code></li>
</ul>
<p>空对象不做赘述。</p>
<p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"[object Object]"</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> <code>[] + []</code></h4>
<p>类似 <code>1</code> 两个空数组都执行 <code>toPrimitive</code>，返回两个空字符串。</p>
<p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">""</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> <code>{} + []</code></h4>
<p>类似于 <code>{} + 1</code>，<code>{} + []</code> 相当于 <code>{}; + []</code>，一元 <code>+</code> 强制将 <code>&quot;&quot;</code> 隐式转换为<code>0</code>，最终结果为<code>0</code></p>
<p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">0</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> <code>{} + {}</code></h4>
<p>对于这个题，我先公布一下答案，之后说一下我的疑问。</p>
<p><strong>答案</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>object Object<span class="token punctuation">]</span><span class="token punctuation">[</span>object Object<span class="token punctuation">]</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>疑问</strong></p>
<p>为什么 <code>JavaScript</code> 引擎没有将前面的 <code>{}</code> 解释成代码块？</p>
<blockquote>
<p>友情提示：由于 <code>{}</code> 可以解释为代码块的形式，有些需要注意的地方，举个栗子:</p>
<ul>
<li>空对象调用方法时：<code>{}.toString()</code> 会报错</li>
<li>箭头函数返回对象时：<code>let getTempItem = id =&gt; { id: id, name: &quot;Temp&quot; }</code> 会报错</li>
</ul>
</blockquote>
<h3 id="_14-你能灵活运用-parseint-与-parsefloat-吗" tabindex="-1"><a class="header-anchor" href="#_14-你能灵活运用-parseint-与-parsefloat-吗" aria-hidden="true">#</a> 14.你能灵活运用 parseInt 与 parseFloat 吗</h3>
<ol>
<li><code>parseInt</code>：从数字类开始看，看到非数字类为止，返回原来的数。(小数点也属于非有效数字)</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'123x'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token number">123</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'-023x'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">-</span><span class="token number">23</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'1.1'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token number">1</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'-abc'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token number">NaN</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'x123'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token number">NaN</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol>
<li><code>parseInt(string, radix)</code> 还有第二个参数 <code>radix</code> 表示要解析数字的基数，取值为 <code>2~36</code> (默认值为<code>10</code>)</li>
<li><code>parseFloat</code> 与 <code>parseInt</code> 类似，只不过它返回浮点数。从数字类开始看，看到除了第一个点以外的非数字类为截止，返回前面的数。</li>
</ol>
<h4 id="网红题-1-2-3-map-parseint" tabindex="-1"><a class="header-anchor" href="#网红题-1-2-3-map-parseint" aria-hidden="true">#</a> 网红题：['1','2','3'].map(parseInt)</h4>
<p>这个网红题考察的就是 <code>parseInt</code> 有两个参数。 <code>map</code> 传入的函数可执行三个参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ele   遍历的元素</span>
<span class="token comment">// index 遍历的元素索引</span>
<span class="token comment">// arr   数组</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>['1','2','3'].map(parseInt)相当于执行了以下三次过程：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><code>parseInt('1', 0, ['1','2','3'])</code>: radix为0时，默认取10，最后返回1</li>
<li><code>parseInt('2', 1, ['1','2','3'])</code>: radix取值为2~36，返回NaN</li>
<li><code>parseInt('3', 2, ['1','2','3'])</code>: radix取值为2，二进制只包括0，1，返回NaN</li>
</ul>
<h3 id="_15-如何让-if-a-1-a-2-条件成立" tabindex="-1"><a class="header-anchor" href="#_15-如何让-if-a-1-a-2-条件成立" aria-hidden="true">#</a> 15.如何让 if(a == 1 &amp;&amp; a == 2) 条件成立？</h3>
<p><code>valueOf</code> 的应用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>关于本文</p>
<p>https://juejin.cn/post/7021750693262262308</p>
</template>
