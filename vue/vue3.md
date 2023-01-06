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
##### 开发维护的角度：Vue 2 是使用 Flow.js 来做类型校验。但现在 Flow.js 已经停止维护了，整个社区都在全面使用 TypeScript 来构建基础库
##### 二次开发难度：Vue 2 内部运行时，是直接执行浏览器 API 的。但这样就会在 Vue 2 的跨端方案中带来问题，要么直接进入 Vue 源码中，和 Vue 一起维护，比如 Vue 2 中你就能见到 Weex 的文件夹。要么是要直接改为复制一份全部 Vue 的代码，把浏览器 API 换成客户端或者小程序的。比如 mpvue 就是这么做的，但是 Vue 后续的更新就很难享受到。
##### 普通开发者的角度：Vue 2 响应式并不是真正意义上的代理，而是基于 Object.defineProperty() 实现的。这个 API 并不是代理，而是对某个属性进行拦截，所以有很多缺陷，比如：删除数据就无法监听，需要 $delete 等 API 辅助才能监听到。并且，Option API 在组织代码较多组件的时候不易维护。对于 Option API 来说，所有的 methods、computed 都在一个对象里配置，这对小应用来说还好。但代码超过 300 行的时候，新增或者修改一个功能，就需要不停地在 data，methods 里跳转写代码，上下反复横跳。
##### Vue 3 就是继承了 Vue 2 具有的响应式、虚拟 DOM，组件化等所有优秀的特点，并且全部重新设计，解决了这些历史包袱的新框架，是一个拥抱未来的前端框架。
##### Vue 3 新特性：响应式系统、Composition API 组合语法、新的组件和 Vite 是你需要重视的；自定义渲染器这方面的知识，你想用 Vue 开发跨端应用时会用到；如果你想对 Vue 源码作出贡献，[RFC](https://github.com/vuejs/rfcs) 机制你也需要好好研究，并且得对 TypeScript 重构有很好的经验。
##### Vue 2 的响应式机制是基于 Object.defineProperty() 这个 API 实现的，Vue 还使用了 Proxy，这两者看起来都像是对数据的读写进行拦截，但是 defineProperty 是拦截具体某个属性，Proxy 才是真正的“代理”。
```js
Object.defineProperty(obj, 'title', {
  get() {},
  set() {},
})
```
##### 当项目里“读取 obj.title”和“修改 obj.title”的时候被 defineProperty 拦截，但 defineProperty 对不存在的属性无法拦截，所以 Vue 2 中所有数据必须要在 data 里声明。而且，如果 title 是一个数组的时候，对数组的操作，并不会改变 obj.title 的指向，虽然我们可以通过拦截.push 等操作实现部分功能，但是对数组的长度的修改等操作还是无法实现拦截，所以还需要额外的 $set 等 API。
```js
new Proxy(obj, {
  get() { },
  set() { },
})
```
##### 虽然 Proxy 拦截 obj 这个数据，但 obj 具体是什么属性，Proxy 则不关心，统一都拦截了。而且 Proxy 还可以监听更多的数据格式，比如 Set、Map，这是 Vue 2 做不到的。
##### Proxy 代表一种方向，就是框架会越来越多的拥抱浏览器的新特性。在 Proxy 普及之前，我们是没有办法完整的监听一个 JavaScript 对象的变化，只能使用 Object.defineProperty() 去实现一部分功能。
##### 前端框架利用浏览器的新特性来完善自己，才会让前端这个生态更繁荣，抛弃旧的浏览器是早晚的事。
##### [自定义渲染器](https://static001.geekbang.org/resource/image/95/0c/9573fb8b18cb694fe9959b82742ecb0c.jpg?wh=1444x824)，Vue 2 内部所有的模块都是揉在一起的，这样做会导致不好扩展的问题，Vue 3拆包，使用最近流行的 monorepo 管理方式（Monorepo的意思是在版本控制系统的单个代码库里包含了许多项目的代码。这些项目虽然有可能是相关的，但通常在逻辑上是独立的，并由不同的团队维护。），响应式、编译和运行时全部独立了，在 Vue 3 的组织架构中，响应式独立了出来。而 Vue 2 的响应式只服务于 Vue，Vue 3 的响应式就和 Vue 解耦了，你甚至可以在 Node.js 和 React 中使用响应式。
##### 渲染的逻辑也拆成了平台无关渲染逻辑和浏览器渲染 API 两部分
##### 使用 Vue 3 开发小程序、开发 canvas 小游戏以及开发客户端的时候，就不用全部 fork Vue 的代码，只需要实现[平台的渲染逻辑](https://static001.geekbang.org/resource/image/27/f6/2742614d6d43134084835a44079313f6.jpg?wh=1920x939)就可以。
##### 响应式、编译和运行时几部分组合在一起就是运行在浏览器端的 Vue 3，每个模块又都可以独立扩展出新的功能
##### 全部模块使用 TypeScript 重构，类型系统带来了更方便的提示，并且让我们的代码能够更健壮。
##### 第一点是，类型系统带来了更方便的提示；第二点是，类型系统让代码更健壮。
##### 由于所有数据都挂载在 this 之上，因而 Options API 的写法对 TypeScript 的类型推导很不友好，并且这样也不好做 Tree-shaking(Tree-shaking删除无用的导入/出模块; 将有用的代码进行打包) 清理代码。
##### 新增功能基本都得修改 data、method 等配置，并且代码上 300 行之后，会经常上下反复横跳，开发很痛苦。
##### 代码不好复用，Vue 2 的组件很难抽离通用逻辑，只能使用 mixin，还会带来命名冲突的问题。
##### 使用 Composition API 后
##### 所有 API 都是 import 引入的。用到的功能都 import 进来，对 Tree-shaking 很友好，打包的时候会被清理掉 ，减小包的大小。
##### 不再上下反复横跳，我们可以把一个功能模块的 methods、data 都放在一起书写，维护更轻松。
##### 代码方便复用，可以把一个功能所有的 methods、data 封装在一个独立的函数里，复用代码非常容易。
##### Composotion API 新增的 return 等语句，在实际项目中使用。
##### [Composition API 对我们开发 Vue 项目起到了巨大的帮助](https://static001.geekbang.org/resource/image/a0/5f/a0010538b40e48fc5fc68b0eed2b025f.jpg?wh=3220x2046)
##### Vue 3 还内置了 Fragment、Teleport 和 Suspense 三个新组件
##### Fragment: Vue 3 组件不再要求有一个唯一的根节点，清除了很多无用的占位 div
##### Teleport: 允许组件渲染在别的元素内，主要开发弹窗组件的时候特别有用。
##### Suspense: 异步组件，更方便开发有异步请求的组件。
##### [Webpack 的工作原理](https://static001.geekbang.org/resource/image/d4/ba/d471d1f14abeaf4b091ddf5fb83e3eba.jpg?wh=1920x913)，Webpack 要把所有路由的依赖打包后，才能开始调试。
##### [Vite 的工作原理](https://static001.geekbang.org/resource/image/8b/4c/8b726d2b8a09b045874340504a04414c.jpg?wh=1920x960)，一开始就可以准备联调，然后根据首页的依赖模块，再去按需加载，这样启动调试所需要的资源会大大减少。
##### [vue3新特性](https://static001.geekbang.org/resource/image/cc/d0/cc47460b1f9441d843bff6d37777a8d0.jpg?wh=3059x1664)
##### Vue 3 也不是没有问题，由于新的响应式系统用了 Proxy，会存在兼容性问题。也就是说，如果你的应用被要求兼容 IE11，就应该选择 Vue 2。而且，Vue 团队也已经放弃 Vue 3 对 IE11 浏览器的支持。
##### [是否使用vue3](https://static001.geekbang.org/resource/image/2d/1a/2d26cea2a48d9caec0yybe6862643e1a.jpg?wh=1921x1270)
##### [迁移指南](https://cn.vuejs.org/)
##### 升级 Vue 3 的过程中，除了 Vue 3 本身的语法变化，生态也要注意选择。。有一些周边的生态库可能还存在不稳定的情况，开发项目的时候我们时刻关注项目的 GitHub 即可。
##### Vue-cli4 已经提供内置选项，你当然可以选择它支持的 Vue 2。如果你对 Vite 不放心的话，Vue-cli4 也全面支持 Vue 3
##### vue-router 是复杂项目必不可少的路由库，它也包含一些写法上的变化，比如从 new Router 变成 createRouter；使用方式上，也全面拥抱 Composition API 风格，提供了 useRouter 和 useRoute 等方法。
##### Vuex 4.0 也支持 Vue 3，不过变化不大。有趣的是 Vue 官方成员还发布了一个 Pinia，Pinia 的 API 非常接近 Vuex5 的设计，并且对 Composition API 特别友好，更优雅一些。
##### 其他生态诸如 Nuxt、组件库 Ant-design-vue、Element 等等，都有 Vue 3 的版本发布。
##### 使用自动化升级工具进行 Vue 的升级
##### 在 Vue 3 的项目里，有一个 @vue/compat 的库，这是一个 Vue 3 的构建版本，提供了兼容 Vue 2 的行为。这个版本默认运行在 Vue 2 下，它的大部分 API 和 Vue 2 保持了一致。当使用那些在 Vue 3 中发生变化或者废弃的特性时，这个版本会提出警告，从而避免兼容性问题的发生，帮助你很好地迁移项目。并且通过升级的提示信息，@vue/compat 还可以很好地帮助你学习版本之间的差异。

```json
// 首先我们把项目依赖的 Vue 版本换成 Vue 3，并且引入了 @vue/compat 。
"dependencies": {
-  "vue": "^2.6.12",
+  "vue": "^3.2.19",
+  "@vue/compat": "^3.2.19"
   ...
},
"devDependencies": {
-  "vue-template-compiler": "^2.6.12"
+  "@vue/compiler-sfc": "^3.2.19"
}
```
```js
// 然后给 vue 设置别名 @vue/compat，也就是以 compat 作为入口
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    ......
  }
}
```
##### 这时你就会在控制台看到很多警告，以及很多优化的建议。我们参照建议，挨个去做优化就可以了。
##### 自动化替换的工具,“阿里妈妈”出品的 [gogocode](https://gogocode.io/zh/docs/vue/vue2-to-vue3)
##### 自动化替换工具的原理很简单，和 Vue 的 Compiler 优化的原理是一样的，也就是利用编译原理做代码替换。我们利用 babel 分析左边 Vue 2 的源码，解析成 AST，然后根据 Vue 3 的写法对 AST 进行转换，最后生成新的 Vue 3 代码。
<img src="https://static001.geekbang.org/resource/image/e3/e0/e371fee0a7e75942151724yy58fbfee0.jpg?wh=1920x1040" />

##### 对于替换过程的中间编译成的 AST，你可以理解为用 JavaScript 的对象去描述这段代码，这和虚拟 DOM 的理念有一些相似，我们基于这个对象去做优化，最终映射生成新的 Vue 3 代码。
##### Vue 3 的核心功能，包括项目搭建、Composition API、响应式、组件化和动画。
##### 如果没有`<script setup>`，需要在`<script>`中导出一个对象
##### `<script setup>`还有其它一些很好用的功能，比如能够使用顶层的 await 去请求后端的数据等等
##### 在 style 标签上加上 scoped 这个属性，定义的 CSS 就只会应用到当前组件的元素上，避免了一些样式冲突的问题。标签和样式的属性上，新增了 data- 的前缀，确保只在当前组件生效。
##### 在 scoped 内部写全局的样式，可以用:global 来标记
```vue
<!-- 通过 v-bind 函数，直接在 CSS 中使用 JavaScript 中的变量 -->
<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
let count = ref(1)
let color = ref('red')
function add() {
  count.value++
  color.value = Math.random()>0.5? "blue":"red"
}
</script>

<style scoped>
h1 {
  color:v-bind(color);
}
</style>
```
##### [三种响应式的区别](https://static001.geekbang.org/resource/image/b5/11/b5344de85923a2ba8bea60283b491711.png?wh=1336x650)
##### watchEffect 这个函数让我们在数据变化之后可以执行指定的函数
##### Composition API 最大的优点，也就是可以任意拆分出独立的功能。
##### Vueuse 工具库，包含了大量类似 useStorage 的工具函数库
##### 可以把日常开发中用到的数据，无论是浏览器的本地存储，还是网络数据，都封装成[响应式数据](https://static001.geekbang.org/resource/image/5a/0e/5a5yy5dc6f6b25f1c1ff8f3a434cd10e.jpg?wh=2316x1829)，统一使用响应式数据开发的模式。这样，我们开发项目的时候，只需要修改对应的数据就可以了。
##### VueUse 的官方的介绍说这是一个 Composition API  的工具集合，适用于 Vue 2.x 或者 Vue 3.x。
##### VueUse 提供了一大批工具函数，包括全屏、网络请求、动画等，都可以使用响应式风格的接口去使用，并且同时兼容 Vue 2 和 Vue 3，开箱即用。
##### Vue 的组件化机制
<img src="https://static001.geekbang.org/resource/image/0e/39/0e922d413eeeac4378233baa254dd039.png?wh=1406x544" />

##### 组件分成两个类型，一个是通用型组件，一个是业务型组件。通用型组件就是各大组件库的组件风格，包括按钮、表单、弹窗等通用功能。业务型组件包含业务的交互逻辑，包括购物车、登录注册等，会和我们不同的业务强绑定。
##### 组件的开发由于要考虑代码的复用性，会比通常的业务开发要求更高，需要有更好的可维护性和稳定性的要求。
##### 通过 defineProps 定义了传递数据的格式，通过 defineEmits 定义了监听的函数，最终实现了组件和外部数据之间的同步。
<img src="https://static001.geekbang.org/resource/image/43/1b/43767ceb3324b4887271d0d20909a31b.jpg?wh=1904x1279" />
