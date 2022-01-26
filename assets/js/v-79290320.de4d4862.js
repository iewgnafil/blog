"use strict";(self.webpackChunkIEWGANFIL=self.webpackChunkIEWGANFIL||[]).push([[271],{3805:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-79290320",path:"/study/study3.html",title:"输出什么",lang:"zh-CN",frontmatter:{date:"2022/1/20 20:23",coverUrl:"http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202109/ac3990b3d19dd512dd6f6a364e70848a--1897315302.jpg",sticky:!0,keyword:"设置keyword,设置keyword,设置keyword,设置keyword",description:"输出什么",title:"输出什么",tag:["面试题"],categories:["Javascript"]},excerpt:"",headers:[{level:3,title:"map",slug:"map",children:[]},{level:3,title:"parseInt",slug:"parseint",children:[]},{level:3,title:"回到真实的事例上",slug:"回到真实的事例上",children:[]}],git:{updatedTime:16427402e5,contributors:[{name:"iewgnafil",email:"1519467168@qq.com",commits:1}]}}},1479:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p><code>map()</code> 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> new_array <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">[</span><span class="token punctuation">,</span>index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token comment">// Return element for new_array</span>\n <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以看到<code>callback</code>回调函数需要三个参数, 我们通常只使用第一个参数 (其他两个参数是可选的)。<br><code>currentValue</code> 是callback 数组中正在处理的当前元素。<br><code>index</code>可选, 是callback 数组中正在处理的当前元素的索引。<br><code>array</code>可选, 是callback map 方法被调用的数组。<br> 另外还有<code>thisArg</code>可选, 执行 callback 函数时使用的this 值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, 3, 4]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt</h3><p><code>parseInt()</code> 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> intValue <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">,</span> radix<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>string</code> 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。</p><p><code>radix</code> 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。<br><code>返回值</code> 返回一个整数或NaN</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4 -&gt; 将100视为2进制下的显示  则为4</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="回到真实的事例上" tabindex="-1"><a class="header-anchor" href="#回到真实的事例上" aria-hidden="true">#</a> 回到真实的事例上</h3><p>回到我们真实的事例上</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>对于每个迭代<code>map</code>, <code>parseInt()</code>传递两个参数: <strong>字符串和基数</strong>。<br> 所以实际执行的的代码是：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>即返回的值分别为：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// NaN, 3 不是二进制</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>所以：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span>\n<span class="token comment">// 1, NaN, NaN</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',20),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);