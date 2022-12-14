玩转 Vue 3 全家桶
##### 工程化、监控、跨端
##### 算法、设计模式、编译原理
##### React 注重数据不可变、虚拟 DOM 和运行时
##### Svelte 运行时都非常轻量级，侧重在于编译时的优化
##### Angular 在抽象这个维度走向一个极致
##### Vue 兼顾响应式、虚拟 DOM、运行时和编译优化;
##### Composition 组合 API、基于 Proxy 的响应式系统、自定义渲染器
##### [vue3和react知识地图](https://static001.geekbang.org/resource/image/0a/be/0acf4884eccd8266a016c555651a09be.jpg?wh=6000x3000)
##### 走 Vite+Option 先熟悉模板的语法，把官网的入门教程先走一遍，然后再去研究 Vue 3 的新特性,去熟悉 Composition API 的新语法
##### [前端知识体系](https://static001.geekbang.org/resource/image/b8/95/b8fa99b00f432b7df6d3a292ec0a8095.jpg?wh=1624x1306)
##### 深入了解前端框架的设计原理、内部算法和设计模式，以及编译原理这些遥专业知识在前端的实际应用
##### Vue 3 官⽹的核⼼内容和 API
##### Vue 3 的⽣态，包括 Vue-cli、Vite、Vuex、Vue-router、Devtools 等生态库，以及实战开发中需要的库，比如 Vue 3 中集成 JSX、单元测试、服务端渲染 SSR
##### Vue 3 进阶开发，如何设计⼀个通用组件库、如何动态控制页面路由、如何做性能优化、如何发布和打包……
##### Vue 3 生态源码
##### Angular 1 在对数据变化的检查上，遵循每次用户交互时都检查一次数据是否变化，有变化就去更新 DOM 这一方法。脏检查
##### Vue 1 使用响应式，初始化的时候，Watcher 监听了数据的每个属性，这样数据发生变化的时候，我们就能精确地知道数据的哪个 key 变了，去针对性修改对应的 DOM 即可
##### [Watcher](https://static001.geekbang.org/resource/image/c8/0b/c8f234a40e63dbf86809f6885714b10b.jpg?wh=2540x1441)
##### React 框架，在页面初始化的时候，在浏览器 DOM 之上，搞了一个叫虚拟 DOM 的东西，也就是用一个 JavaScript 对象来描述整个 DOM 树。我们可以很方便的通过虚拟 DOM 计算出变化的数据，去进行精确的修改。
```html
<div id = "app">
  <p class = "item">Item1</p>
  <div class = "item">Item2</div>
</div>
```
```javascript
{
  tag: "div",
  attrs: {
    id: "app"
  },
  children: [
    {
      tag: "p",
      attrs: { className: "item" },
      children: ["Item1"]
    },
    {
      tag: "div",
      attrs: { className: "item" },
      children: ["Item2"]
    }
  ]
}
```
##### 浏览器操作 DOM 一直都是性能杀手，而虚拟 DOM 的 Diff 的逻辑，又能够确保尽可能少的操作 DOM，这也是虚拟 DOM 驱动的框架性能一直比较优秀的原因之一
##### [虚拟 DOM](https://static001.geekbang.org/resource/image/b2/b4/b262c52d5c353008715003fa263403b4.jpg?wh=1970x1445)
##### 在 Vue 框架下，如果数据变了，那框架会主动告诉你修改了哪些数据；而 React 的数据变化后，我们只能通过新老数据的计算 Diff 来得知数据的变化。
##### 对于 Vue 来说，它的一个核心就是“响应式”，也就是数据变化后，会主动通知我们。响应式数据新建 Watcher 监听，本身就比较损耗性能，项目大了之后每个数据都有一个 watcher 会影响性能。
##### 对于 React 的虚拟 DOM 的 Diff 计算逻辑来说，如果虚拟 DOM 树过于庞大，使得计算时间大于 16.6ms，那么就可能会造成性能的卡顿。
##### React 为了突破性能瓶颈，借鉴了操作系统时间分片的概念，引入了 Fiber 架构。通俗来说，就是把整个虚拟 DOM 树微观化，变成链表，然后我们利用浏览器的空闲时间计算 Diff。一旦浏览器有需求，我们可以把没计算完的任务放在一旁，把主进程控制权还给浏览器，等待浏览器下次空闲。
##### [巧妙地利用空闲实现计算，解决了卡顿的问题](https://static001.geekbang.org/resource/image/27/23/27dbe22e81ccc1cec8b35b4ee0a06f23.jpg?wh=2796x1564)
##### [计算 Diff](https://static001.geekbang.org/resource/image/22/6f/22b7606230e2920584387249a83db36f.jpg?wh=2358x806)
##### 响应式数据是主动推送变化，虚拟 DOM 是被动计算数据的 Diff，一个推一个拉，它们看起来是两个方向的技术，但被 Vue 2 很好地融合在一起，采用的方式就是组件级别的划分。
##### 对于 Vue 2 来说，组件之间的变化，可以通过响应式来通知更新。组件内部的数据变化，则通过虚拟 DOM 去更新页面。这样就把响应式的监听器，控制在了组件级别，而虚拟 DOM 的量级，也控制在了组件的大小。
##### [组件内部是没有 Watcher 监听器的，而是通过虚拟 DOM 来更新，每个组件对应一个监听器，大大减小了监听器的数量](https://static001.geekbang.org/resource/image/22/51/2237975345b4cf039a6cd733cd5be451.jpg?wh=7731x6528)
##### 除了响应式和虚拟 DOM 这个维度，Vue 和 React 还有一些理念和路线的不同，在模板的书写上，也走出了 template 和 JSX 两个路线。
#### [vue and react](https://static001.geekbang.org/resource/image/66/0f/669188c294d8e306072ef4273ec2630f.png?wh=1920x635)
##### React 的世界里只有 JSX，最终 JSX 都会在 Compiler 那一层，也就是工程化那里编译成 JS 来执行，所以 React 最终拥有了全部 JS 的动态性，这也导致了 React 的 API 一直很少，只有 state、hooks、Component 几个概念，主要都是 JavaScript 本身的语法和特性。
##### 而 Vue 的世界默认是 template，也就是语法是限定死的，比如 v-if 和 v-for 等语法。有了这些写法的规矩后，我们可以在上线前做很多优化。Vue 3 很优秀的一个点，就是在虚拟 DOM 的静态标记上做到了极致，让静态的部分越过虚拟 DOM 的计算，真正做到了按需更新，很好的提高了性能。