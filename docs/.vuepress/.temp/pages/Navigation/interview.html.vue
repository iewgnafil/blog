<template><h2 id="一、事件循环" tabindex="-1"><a class="header-anchor" href="#一、事件循环" aria-hidden="true">#</a> 一、事件循环</h2>
<blockquote>
<p>Javascript是一门单线程语言，只有前一个任务执行完毕才会运行下一个任务，为了规避掉资源分配的浪费，所以将Javascript的任务分为同步任务和异步任务</p>
<blockquote>
<p>异步任务又分为宏任务和微任务</p>
</blockquote>
</blockquote>
<h3 id="eventloop" tabindex="-1"><a class="header-anchor" href="#eventloop" aria-hidden="true">#</a> EventLoop</h3>
<blockquote>
<p>先执行同步操作，异步操作排在事件队列里</p>
</blockquote>
<ol>
<li>先判断是同步还是异步，同步任务进入主线程，异步任务进入Event Table(任务队列)</li>
<li>异步任务在Event Table中注册事件，当满足促发条件的时候，会被推入到Event Queue(事件队列)</li>
<li>主线程空闲时，才会在Event Queue中看是否又需要执行的异步任务，如果有，就推入主线程中执行</li>
</ol>
<blockquote>
<p>异步任务执行顺序为先执行微任务，在执行宏任务</p>
</blockquote>
<hr>
<h2 id="二、this是什么" tabindex="-1"><a class="header-anchor" href="#二、this是什么" aria-hidden="true">#</a> 二、this是什么</h2>
<p>当一个函数被调用时,会创建一个执行上下文,这个执行上下文包含函数在哪里调用(调用栈),函数的调用方法,传入的参数等,<strong>this</strong>就是用来记录当前这个执行上下文信息的一个属性</p>
<h3 id="关于this指针的指向问题" tabindex="-1"><a class="header-anchor" href="#关于this指针的指向问题" aria-hidden="true">#</a> 关于this指针的指向问题</h3>
<ol>
<li><strong>this</strong>始终会指向一个对象,是根据函数的执行环境来决定的,函数作为一个对象的方法被调用的话,<strong>this</strong>就指向这个对象</li>
<li>如果是new的话,<strong>this</strong>就指向new出来的这个实例化对象</li>
<li>因为匿名函数和自执行函数的执行环境具有全局性,所以它的this一般指向window</li>
<li>箭头函数没有自己的this,它里面的<strong>this</strong>的指向跟外部作用域中<strong>this</strong>指向一致</li>
</ol>
<hr>
<h2 id="三、闭包相关问题" tabindex="-1"><a class="header-anchor" href="#三、闭包相关问题" aria-hidden="true">#</a> 三、闭包相关问题</h2>
<blockquote>
<p>当内部函数被保存到外部时,将会产生闭包</p>
</blockquote>
<p><em><strong>定义</strong></em>:在JavaScript中,根据词法作用域的规则,内部函数总是可以访问其外部函数中申明的变量,当通过调用一个外部函数返回一个内部函数后,即使该外部函数已经执行结束,但是内部函数引用外部函数的变量,依然保存在内存中,我们把这些变量的集合称为闭包</p>
<p><em><strong>缺点</strong></em>:闭包会导致原有的作用域链不释放,造成内存泄漏<br>
<em><strong>优点</strong></em>:</p>
<ol>
<li>实现公有化变量 (企业的模块开发)</li>
<li>做缓存</li>
<li>实现属性的私有化</li>
<li>模块化开发，防止污染全局变量</li>
</ol>
<blockquote>
<p>变量长期驻扎在内存中,避免全局变量的污染,私有成员的存在</p>
</blockquote>
<hr>
<h2 id="四、vue的生命周期" tabindex="-1"><a class="header-anchor" href="#四、vue的生命周期" aria-hidden="true">#</a> 四、vue的生命周期</h2>
<blockquote>
<p>Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。</p>
</blockquote>
<p>每一个组件或者实例都会经历一个完整的生命周期，总共分为三个阶段：初始化、运行中、销毁。</p>
<ol>
<li>实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行<strong>beforeCreate</strong>钩子函数，这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的dom，一般不做操作</li>
<li>挂载数据，绑定事件等等，然后执行<strong>created</strong>函数，这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数，在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取</li>
<li>接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染，然后执行<strong>beforeMount</strong>钩子函数，在这个函数中虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发<strong>updated</strong>，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取</li>
<li>接下来开始render，渲染出真实dom，然后执行<strong>mounted</strong>钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...</li>
<li>当组件或实例的数据更改之后，会立即执行<strong>beforeUpdate</strong>，然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染，一般不做什么事儿</li>
<li>当更新完成后，执行<strong>updated</strong>，数据已经更改完成，dom也重新render完成，可以操作更新后的虚拟dom</li>
<li>当经过某种途径调用$destroy方法后，立即执行<strong>beforeDestroy</strong>，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等</li>
<li>组件的数据绑定、监听...去掉后只剩下dom空壳，这个时候，执行<strong>destroyed</strong>，在这里做善后工作也可以</li>
</ol>
<hr>
<h2 id="五、web前端开发技术的优化策略" tabindex="-1"><a class="header-anchor" href="#五、web前端开发技术的优化策略" aria-hidden="true">#</a> 五、web前端开发技术的优化策略</h2>
<p><a href="https://blog.csdn.net/smell201611010513/article/details/103784242" target="_blank" rel="noopener noreferrer">web前端开发技术的优化策略<ExternalLinkIcon/></a></p>
<ol>
<li>减少HTTP请求数</li>
<li>优化文件的规模</li>
<li>减少DNS查找</li>
<li>杜绝无用响应</li>
<li>有效避免重定向</li>
<li>优化网页内容</li>
</ol>
<h3 id="减少页面加载时间的方式" tabindex="-1"><a class="header-anchor" href="#减少页面加载时间的方式" aria-hidden="true">#</a> 减少页面加载时间的方式</h3>
<ol>
<li>优化图片</li>
<li>图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）</li>
<li>优化CSS（压缩合并css，如 margin-top, margin-left...)</li>
<li>网址后加斜杠（如www.campr.com/目录，会判断这个目录是什么文件类型，或者是目录。）</li>
<li>cdn托管</li>
<li>标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。<br>
当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加 载后面的内容。从而加载时间快了，浏览体验也更好了）</li>
<li>减少http请求（合并文件，合并图片）</li>
</ol>
<hr>
<h2 id="六、回流和重绘" tabindex="-1"><a class="header-anchor" href="#六、回流和重绘" aria-hidden="true">#</a> 六、回流和重绘</h2>
<p><strong>回流</strong>：当render tree中的一部分或者全部因为元素的规模尺寸，布局，隐藏等改变而需要重新构建，这就叫回流</p>
<blockquote>
<p>每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候一定会发生回流，因为要构建render tree</p>
</blockquote>
<p><strong>重绘</strong>:在回流的时候，浏览器会使渲染树中收到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏 览器会重新绘制受影响的部分到屏幕中，这就是重绘</p>
<blockquote>
<p>当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，不会影响布局，就叫重绘</p>
</blockquote>
<h3 id="何时发生回流重绘" tabindex="-1"><a class="header-anchor" href="#何时发生回流重绘" aria-hidden="true">#</a> 何时发生回流重绘</h3>
<ul>
<li>回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流。比如以下情况：</li>
<li>添加或删除可见的DOM元素</li>
<li>元素的位置发生变化</li>
<li>元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）</li>
<li>内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。</li>
<li>页面一开始渲染的时候（这肯定避免不了）</li>
<li>浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）</li>
</ul>
<p><strong>注意：回流一定会触发重绘，而重绘不一定会回流</strong></p>
<h3 id="减少重排重绘的方法" tabindex="-1"><a class="header-anchor" href="#减少重排重绘的方法" aria-hidden="true">#</a> 减少重排重绘的方法</h3>
<p><a href="https://github.com/chenjigeng/blog/issues/4" target="_blank" rel="noopener noreferrer">减少重排重绘的方法<ExternalLinkIcon/></a></p>
<h3 id="浏览器的优化机制" tabindex="-1"><a class="header-anchor" href="#浏览器的优化机制" aria-hidden="true">#</a> 浏览器的优化机制</h3>
<p>目前大多数浏览器，都会通过队列化来批量的修改重排的过程，浏览器会将修改操作放到队列中，直到一段时间后，队列的存储达到阈值，才会一次性全部重排，清空队列；<strong>但是！当你获取布局信息的操作的时候，会强制队列刷新</strong></p>
<ul>
<li>offsetTop、offsetLeft、offsetWidth、offsetHeight</li>
<li>scrollTop、scrollLeft、scrollWidth、scrollHeight</li>
<li>clientTop、clientLeft、clientWidth、clientHeight</li>
<li>getComputedStyle()</li>
<li>getBoundingClientRect</li>
</ul>
<blockquote>
<p>以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，<strong>最好避免使用上面列出的属性，他们都会刷新渲染队列</strong>如果要使用它们，最好将值缓存起来。</p>
</blockquote>
<hr>
<h2 id="七、常见的http状态码" tabindex="-1"><a class="header-anchor" href="#七、常见的http状态码" aria-hidden="true">#</a> 七、常见的HTTP状态码</h2>
<h3 id="状态码分类" tabindex="-1"><a class="header-anchor" href="#状态码分类" aria-hidden="true">#</a> 状态码分类：</h3>
<table>
<thead>
<tr>
<th>分类</th>
<th>分类描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>1**</td>
<td>信息，服务器收到请求，需要请求者继续执行操作</td>
</tr>
<tr>
<td>2**</td>
<td>成功，操作被成功接收并处理</td>
</tr>
<tr>
<td>3**</td>
<td>重定向，需要进一步的操作以完成请求</td>
</tr>
<tr>
<td>4**</td>
<td>客户端错误，请求包含语法错误或无法完成请求</td>
</tr>
<tr>
<td>5**</td>
<td>服务器错误，服务器在处理请求的过程中发生了错误</td>
</tr>
</tbody>
</table>
<h3 id="常见的http状态码列表" tabindex="-1"><a class="header-anchor" href="#常见的http状态码列表" aria-hidden="true">#</a> 常见的HTTP状态码列表:</h3>
<table>
<thead>
<tr>
<th>状态码</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><em><strong>100</strong></em></td>
<td>这个状态码告诉客户应该继续发送请求，这个临时响应是用来通知客户端的，部分的请求服务器已经接受，但是客户端应该继续发送请求的剩余部分，如果请求已经完成，就忽略这个响应，而且服务器会在请求完成后向客户发送一个最终的结果。</td>
</tr>
<tr>
<td><em><strong>200</strong></em></td>
<td>这个是最常见的http状态码，表示服务器已经成功接受请求，并将返回客户端所请求的最终结果。</td>
</tr>
<tr>
<td><em><strong>202</strong></em></td>
<td>表示服务器已经接受了请求，但是还没有处理，而且这个请求最终会不会处理还不确定。</td>
</tr>
<tr>
<td><em><strong>204</strong></em></td>
<td>服务器成功处理了请求，但没有返回任何实体内容，可能会返回新的头部元信息。</td>
</tr>
<tr>
<td><em><strong>301</strong></em></td>
<td>客户端请求的页面已经永久移动到新的位置，当链接发生变化时，返回301代码告诉客户端连接的变化，客户端保存新的链接，并向新的链接发出请求，已返回请求结果。</td>
</tr>
<tr>
<td><em><strong>404</strong></em></td>
<td>请求失败，客户端请求的资源没有找到或者是不存在。</td>
</tr>
<tr>
<td><em><strong>500</strong></em></td>
<td>服务器遇到未知的错误，导致无法完成客户端当前的请求。</td>
</tr>
<tr>
<td><em><strong>503</strong></em></td>
<td>服务器由于临时的服务器过载或者是维护，无法解决当前的请求。</td>
</tr>
</tbody>
</table>
<p><a href="https://www.runoob.com/http/http-status-codes.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
<hr>
<h2 id="八、ajax如何使用" tabindex="-1"><a class="header-anchor" href="#八、ajax如何使用" aria-hidden="true">#</a> 八、Ajax如何使用</h2>
<p>一个完整的AJAX请求包括五个步骤：
具体来说，AJAX 包括以下几个步骤。</p>
<ol>
<li>
<p>创建 XMLHttpRequest 对象，也就是创建一个异步调用对象</p>
</li>
<li>
<p>创建一个新的 HTTP 请求，并指定该 HTTP 请求的方法、URL 及验证信息</p>
</li>
<li>
<p>设置响应 HTTP 请求状态变化的函数</p>
</li>
<li>
<p>发送 HTTP 请求</p>
</li>
<li>
<p>获取异步调用返回的数据</p>
</li>
<li>
<p>使用 JavaScript 和 DOM 实现局部刷新</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建可以请求的实例对象</span>
<span class="token keyword">var</span> myAjax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置请求的url参数，这是准备工作</span>
myAjax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'https://autumnfish.cn/search?keywords="我们俩"'</span> <span class="token punctuation">)</span>
<span class="token comment">// 发送请求</span>
myAjax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 接收</span>
myAjax<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>myAjax<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> myAjax<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>myAjax<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// JSON将字符串转换为对象</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><a href="https://juejin.cn/post/6992525007716876325#heading-54" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<hr>
<h2 id="九、下面代码中-a-在什么情况下会打印-1" tabindex="-1"><a class="header-anchor" href="#九、下面代码中-a-在什么情况下会打印-1" aria-hidden="true">#</a> 九、下面代码中 a 在什么情况下会打印 1？</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token operator">?</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	conso<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>答案解析 因为==会进行隐式类型转换 所以我们重写toString方法就可以了</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span> a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr>
<h2 id="十、介绍下-bfc-及其应用" tabindex="-1"><a class="header-anchor" href="#十、介绍下-bfc-及其应用" aria-hidden="true">#</a> 十、介绍下 BFC 及其应用</h2>
<p>BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。<br>
创建BFC 的方式有：</p>
<p>下列方式会创建块格式化上下文：</p>
<ul>
<li>
<p>html根元素（）</p>
</li>
<li>
<p>float浮动（元素的 float 不是 none）</p>
</li>
<li>
<p>绝对定位元素（元素的 position 为 absolute 或 fixed）</p>
</li>
<li>
<p>行内块元素（元素的 display 为 inline-block）</p>
</li>
<li>
<p>display 为表格布局、弹性元素（flex、inline-flex）、网格元素（grid、inline-grid）</p>
</li>
<li>
<p>overflow 计算值(Computed)不为 visible 的块元素</p>
</li>
<li>
<p>等。。。</p>
</li>
</ul>
<p>BFC 主要的作用是：</p>
<ol>
<li>清除浮动</li>
<li>防止同一 BFC 容器中的相邻元素间的外边距重叠问题</li>
</ol>
<p>BFC特性:</p>
<ul>
<li>
<p>BFC元素的垂直方向上会发生边距重叠。</p>
</li>
<li>
<p>BFC元素和浮动元素不会发生重叠。</p>
</li>
<li>
<p>BFC在计算高度时会把浮动元素计算进去。</p>
</li>
<li>
<p>BFC在页面是个独立的容器，里外元素互不影响。</p>
</li>
</ul>
<hr>
<h2 id="十一、对sort-的理解" tabindex="-1"><a class="header-anchor" href="#十一、对sort-的理解" aria-hidden="true">#</a> 十一、对sort()的理解</h2>
<blockquote>
<p>使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果</p>
</blockquote>
<p>答案:<strong>[102, 15, 22, 29, 3, 8]</strong></p>
<p>解析:</p>
<blockquote>
<p>根据MDN上对Array.sort()的解释，<em><strong>默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序</strong></em>。所以'102' 会排在 '15' 前面。</p>
</blockquote>
<p>如果要对数值进行升序排列：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span> 
<span class="token comment">// [3, 8, 15, 22, 29, 102]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr>
<h2 id="十二、call、apply、bind的区别" tabindex="-1"><a class="header-anchor" href="#十二、call、apply、bind的区别" aria-hidden="true">#</a> 十二、call、apply、bind的区别</h2>
<p>作用：</p>
<blockquote>
<p>改变函数执行时的上下文,其中call和apply是立即调用的</p>
</blockquote>
<ol>
<li>cal、apply、bind必须通过函数来调用，第一个参数为对象，若第一个参数为null或者undefined，则指向window</li>
<li>call和bind方法可以接收多个参数，apply方法只能接收2个参数，且第二个参数为数组或者伪数组</li>
<li>call、apply、bind方法的调用：
<ol>
<li>call和apply方法没有返回值（即返回undefined）</li>
<li>bind方法返回一个原函数的拷贝，并具有指定的this值和初始参数</li>
</ol>
</li>
<li>call、apply、bind方法的调用：
<ol>
<li>call和apply是立即执行的</li>
<li>bind返回值是一个函数，需要稍后再调用一下，才会执行。</li>
</ol>
</li>
</ol>
<p><a href="%E5%8F%82%E8%80%83%EF%BC%9Ahttps://segmentfault.com/a/1190000018017796">参考</a></p>
<hr>
<h2 id="十三、分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景。" tabindex="-1"><a class="header-anchor" href="#十三、分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景。" aria-hidden="true">#</a> 十三、分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。</h2>
<p>总结一下：<br>
<em><strong>结构</strong></em>：</p>
<ul>
<li>display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，</li>
<li>visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击</li>
<li>opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击</li>
</ul>
<p><em><strong>继承</strong></em>：</p>
<ul>
<li>display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。</li>
<li>visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。</li>
</ul>
<p><em><strong>性能</strong></em>：</p>
<ul>
<li>displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大</li>
<li>visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容</li>
<li>opacity: 0 ： 修改元素会造成重绘，性能消耗较少</li>
</ul>
<p><em><strong>联系</strong></em>：它们都能让元素不可见</p>
<p><a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/100" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
<hr>
<h2 id="十四、es6-代码转成-es5-代码的实现思路是什么" tabindex="-1"><a class="header-anchor" href="#十四、es6-代码转成-es5-代码的实现思路是什么" aria-hidden="true">#</a> 十四、ES6 代码转成 ES5 代码的实现思路是什么</h2>
<p>Babel 是如何把 ES6 转成 ES5 呢<br>
其大致分为三步：</p>
<ol>
<li>将代码字符串解析成抽象语法树，即所谓的 AST</li>
<li>对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成 ES5 代码</li>
<li>根据处理后的 AST 再生成代码字符串</li>
</ol>
<blockquote>
<p>将ES6的代码转换为AST语法树，然后再将ES6 AST转为ES5 AST，再将AST转为代码</p>
</blockquote>
<hr>
<h2 id="十五、数组里面有10万个数据-取第一个元素和第10万个元素的时间相差多少" tabindex="-1"><a class="header-anchor" href="#十五、数组里面有10万个数据-取第一个元素和第10万个元素的时间相差多少" aria-hidden="true">#</a> 十五、数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少</h2>
<ol>
<li>脚本里面的数组不是真正的数组，用的Hash算法，所以读取时间是一致的；</li>
<li>即便真正的数组，读取时间也是一致的，连续内存直接读就好了；</li>
<li>只有对单向链表才有差异；</li>
</ol>
<hr>
<h2 id="十六、vue-的父组件和子组件生命周期钩子执行顺序是什么" tabindex="-1"><a class="header-anchor" href="#十六、vue-的父组件和子组件生命周期钩子执行顺序是什么" aria-hidden="true">#</a> 十六、Vue 的父组件和子组件生命周期钩子执行顺序是什么</h2>
<ol>
<li>加载渲染过程<br>
<strong>父beforeCreate-&gt;父created-&gt;父beforeMount-&gt;子beforeCreate-&gt;子created-&gt;子beforeMount-&gt;子mounted-&gt;父mounted</strong></li>
<li>子组件更新过程<br>
<strong>父beforeUpdate-&gt;子beforeUpdate-&gt;子updated-&gt;父updated</strong></li>
<li>父组件更新过程<br>
<strong>父beforeUpdate-&gt;父updated</strong></li>
<li>销毁过程<br>
<strong>父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</strong></li>
</ol>
<p><em><strong>总结</strong></em>：从外到内，再从内到外</p>
<hr>
<h2 id="十七、import导入的模块" tabindex="-1"><a class="header-anchor" href="#十七、import导入的模块" aria-hidden="true">#</a> 十七、import导入的模块</h2>
<blockquote>
<p>import导入的模块是只读的：您不能修改导入的模块。只有导出它们的模块才能更改其值</p>
</blockquote>
<p><a href="https://github.com/lydiahallie/javascript-questions#57-whats-the-output" target="_blank" rel="noopener noreferrer">例题<ExternalLinkIcon/></a></p>
<hr>
<h2 id="十八、var、let-和-const" tabindex="-1"><a class="header-anchor" href="#十八、var、let-和-const" aria-hidden="true">#</a> 十八、var、let 和 const</h2>
<ul>
<li>
<p><strong>var</strong>的话会直接在栈内存里预分配内存空间，然后等到实际语句执行的时候，再存储对应的变量，如果传的是引用类型，那么会在堆内存里开辟一个内存空间存储实际内容，栈内存会存储一个指向堆内存的指针</p>
</li>
<li>
<p><strong>let</strong>的话，是不会在栈内存里预分配内存空间，而且在栈内存分配变量时，做一个检查，如果已经有相同变量名存在就会报错</p>
</li>
<li>
<p><strong>const</strong>的话，也不会预分配内存空间，在栈内存分配变量时也会做同样的检查。不过const存储的变量是不可修改的，对于基本类型来说你无法修改定义的值，对于引用类型来说你无法修改栈内存里分配的指针，但是你可以修改指针指向的对象里面的属性</p>
</li>
</ul>
<hr>
<h2 id="十九、-object-steal-和object-freezze" tabindex="-1"><a class="header-anchor" href="#十九、-object-steal-和object-freezze" aria-hidden="true">#</a> 十九、 Object.steal()和Object.freezze()</h2>
<ol>
<li>O<strong>bject.steal()</strong>
<ol>
<li>
<p>防止对象添加新属性或删除现有属性</p>
</li>
<li>
<p>但仍可以修改现有属性的值</p>
</li>
</ol>
</li>
</ol>
<p><a href="https://github.com/lydiahallie/javascript-questions#136-which-of-the-following-will-modify-the-person-object" target="_blank" rel="noopener noreferrer">例题<ExternalLinkIcon/></a></p>
<ol start="2">
<li><strong>Object.freeze()</strong>
<ol>
<li>
<p>冻结一个对象，不可添加、修改、删除任何属性</p>
</li>
<li>
<p>但只是浅冻结对象，只是对对象的直接属性进行了冻结，若属性中又另一个对象，则可对这个对象进行修改</p>
</li>
</ol>
</li>
</ol>
<p><a href="https://github.com/lydiahallie/javascript-questions#137-which-of-the-following-will-modify-the-person-object" target="_blank" rel="noopener noreferrer">例题<ExternalLinkIcon/></a></p>
<hr>
<div style="font-weight:700; text-align:center; padding-top:20px;">最后更新时间：2022.02.12</div></template>
