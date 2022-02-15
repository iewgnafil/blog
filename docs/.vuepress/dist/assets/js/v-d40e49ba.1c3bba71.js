"use strict";(self.webpackChunkIEWGANFIL=self.webpackChunkIEWGANFIL||[]).push([[549],{3365:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-d40e49ba",path:"/Navigation/navigation.html",title:"面试知识导航",lang:"zh-CN",frontmatter:{date:"2022/1/29 20:08",coverUrl:"http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202201/bb2418e08b46b481c0788d639b762b83--2124794725.jpg",sticky:!0,keyword:"导航,回流重绘",description:"面试知识导航",title:"面试知识导航",tag:["笔记"],categories:["面试知识导航"]},excerpt:"",headers:[{level:2,title:"一、你真的了解回流和重绘吗",slug:"一、你真的了解回流和重绘吗",children:[]},{level:2,title:"二、重新认识构造函数、原型和原型链",slug:"二、重新认识构造函数、原型和原型链",children:[]},{level:2,title:"三、改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。",slug:"三、改造下面的代码-使之输出0-9-写出你能想到的所有解法。",children:[]},{level:2,title:"四、怎么让一个 div 水平垂直居中",slug:"四、怎么让一个-div-水平垂直居中",children:[]},{level:2,title:"五、箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？",slug:"五、箭头函数与普通函数-function-的区别是什么-构造函数-function-可以使用-new-生成实例-那么箭头函数可以吗-为什么",children:[]},{level:2,title:"六、介绍下 BFC、IFC、GFC 和 FFC",slug:"六、介绍下-bfc、ifc、gfc-和-ffc",children:[]},{level:2,title:"七、常见的DOM操作",slug:"七、常见的dom操作",children:[]},{level:2,title:"八、前端项目中常见的报错类型汇总",slug:"八、前端项目中常见的报错类型汇总",children:[]},{level:2,title:"九、分清splice、slice和split",slug:"九、分清splice、slice和split",children:[]},{level:2,title:"十、flex 的三个参数 flex:1 0 auto",slug:"十、flex-的三个参数-flex-1-0-auto",children:[]},{level:2,title:"十一、防抖和节流",slug:"十一、防抖和节流",children:[]},{level:2,title:"十二、数组扁平化",slug:"十二、数组扁平化",children:[]}],git:{updatedTime:null,contributors:[]}}},5303:(e,n,a)=>{a.r(n),a.d(n,{default:()=>ae});var l=a(6252);const t=(0,l._)("h1",{id:"面试知识导航",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#面试知识导航","aria-hidden":"true"},"#"),(0,l.Uk)(" 面试知识导航")],-1),s=(0,l._)("h2",{id:"一、你真的了解回流和重绘吗",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#一、你真的了解回流和重绘吗","aria-hidden":"true"},"#"),(0,l.Uk)(" 一、你真的了解回流和重绘吗")],-1),r={href:"https://github.com/chenjigeng/blog/issues/4",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("参考链接"),o=(0,l._)("hr",null,null,-1),c=(0,l._)("h2",{id:"二、重新认识构造函数、原型和原型链",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#二、重新认识构造函数、原型和原型链","aria-hidden":"true"},"#"),(0,l.Uk)(" 二、重新认识构造函数、原型和原型链")],-1),u={href:"https://github.com/yygmind/blog/issues/32",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("参考链接"),h=(0,l.uE)('<hr><h2 id="三、改造下面的代码-使之输出0-9-写出你能想到的所有解法。" tabindex="-1"><a class="header-anchor" href="#三、改造下面的代码-使之输出0-9-写出你能想到的所有解法。" aria-hidden="true">#</a> 三、改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',3),d={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/43",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("解决办法汇总"),_=(0,l._)("hr",null,null,-1),k=(0,l._)("h2",{id:"四、怎么让一个-div-水平垂直居中",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#四、怎么让一个-div-水平垂直居中","aria-hidden":"true"},"#"),(0,l.Uk)(" 四、怎么让一个 div 水平垂直居中")],-1),b={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/92",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("参考链接"),m=(0,l._)("hr",null,null,-1),v=(0,l._)("h2",{id:"五、箭头函数与普通函数-function-的区别是什么-构造函数-function-可以使用-new-生成实例-那么箭头函数可以吗-为什么",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#五、箭头函数与普通函数-function-的区别是什么-构造函数-function-可以使用-new-生成实例-那么箭头函数可以吗-为什么","aria-hidden":"true"},"#"),(0,l.Uk)(" 五、箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？")],-1),x={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/101",target:"_blank",rel:"noopener noreferrer"},U=(0,l.Uk)("参考链接"),w=(0,l._)("hr",null,null,-1),F=(0,l._)("h2",{id:"六、介绍下-bfc、ifc、gfc-和-ffc",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#六、介绍下-bfc、ifc、gfc-和-ffc","aria-hidden":"true"},"#"),(0,l.Uk)(" 六、介绍下 BFC、IFC、GFC 和 FFC")],-1),j={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/122",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("参考链接"),y=(0,l._)("hr",null,null,-1),C=(0,l._)("h2",{id:"七、常见的dom操作",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#七、常见的dom操作","aria-hidden":"true"},"#"),(0,l.Uk)(" 七、常见的DOM操作")],-1),I={href:"https://juejin.cn/post/6940945178899251230#heading-67",target:"_blank",rel:"noopener noreferrer"},D=(0,l.Uk)("参考链接"),A=(0,l._)("hr",null,null,-1),E=(0,l._)("h2",{id:"八、前端项目中常见的报错类型汇总",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#八、前端项目中常见的报错类型汇总","aria-hidden":"true"},"#"),(0,l.Uk)(" 八、前端项目中常见的报错类型汇总")],-1),G={href:"https://juejin.cn/post/6844903893432795149",target:"_blank",rel:"noopener noreferrer"},N=(0,l.Uk)("参考链接"),Q=(0,l._)("hr",null,null,-1),z=(0,l._)("h2",{id:"九、分清splice、slice和split",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#九、分清splice、slice和split","aria-hidden":"true"},"#"),(0,l.Uk)(" 九、分清splice、slice和split")],-1),L={href:"https://juejin.cn/post/7025089834620452894",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("参考链接"),M={href:"https://www.iewganfil.top/A/PDF/splice.pdf",target:"_blank",rel:"noopener noreferrer"},O=(0,l.Uk)("代码"),T=(0,l._)("hr",null,null,-1),H=(0,l._)("h2",{id:"十、flex-的三个参数-flex-1-0-auto",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#十、flex-的三个参数-flex-1-0-auto","aria-hidden":"true"},"#"),(0,l.Uk)(" 十、flex 的三个参数 flex:1 0 auto")],-1),P={href:"https://www.jianshu.com/p/d064282ec5cd",target:"_blank",rel:"noopener noreferrer"},Y=(0,l.Uk)("参考链接"),Z=(0,l._)("hr",null,null,-1),q=(0,l._)("h2",{id:"十一、防抖和节流",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#十一、防抖和节流","aria-hidden":"true"},"#"),(0,l.Uk)(" 十一、防抖和节流")],-1),J={href:"https://juejin.cn/post/7050105366931046436",target:"_blank",rel:"noopener noreferrer"},K=(0,l.Uk)("参考链接"),R=(0,l._)("hr",null,null,-1),S=(0,l._)("h2",{id:"十二、数组扁平化",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#十二、数组扁平化","aria-hidden":"true"},"#"),(0,l.Uk)(" 十二、数组扁平化")],-1),V={href:"https://juejin.cn/post/7051944992700858382",target:"_blank",rel:"noopener noreferrer"},X=(0,l.Uk)("参考链接"),$=(0,l._)("hr",null,null,-1),ee=(0,l._)("div",{style:{"font-weight":"700","text-align":"center","padding-top":"20px"}},"最后更新时间：2022.02.13",-1),ne={},ae=(0,a(3744).Z)(ne,[["render",function(e,n){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,s,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",r,[i,(0,l.Wm)(a)])])]),o,c,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",u,[p,(0,l.Wm)(a)])])]),h,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",d,[f,(0,l.Wm)(a)])])]),_,k,(0,l._)("p",null,[(0,l._)("a",b,[g,(0,l.Wm)(a)])]),m,v,(0,l._)("p",null,[(0,l._)("a",x,[U,(0,l.Wm)(a)])]),w,F,(0,l._)("p",null,[(0,l._)("a",j,[W,(0,l.Wm)(a)])]),y,C,(0,l._)("p",null,[(0,l._)("a",I,[D,(0,l.Wm)(a)])]),A,E,(0,l._)("p",null,[(0,l._)("a",G,[N,(0,l.Wm)(a)])]),Q,z,(0,l._)("p",null,[(0,l._)("a",L,[B,(0,l.Wm)(a)]),(0,l._)("a",M,[O,(0,l.Wm)(a)])]),T,H,(0,l._)("p",null,[(0,l._)("a",P,[Y,(0,l.Wm)(a)])]),Z,q,(0,l._)("p",null,[(0,l._)("a",J,[K,(0,l.Wm)(a)])]),R,S,(0,l._)("p",null,[(0,l._)("a",V,[X,(0,l.Wm)(a)])]),$,ee],64)}]])}}]);