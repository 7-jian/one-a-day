<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <!-- router-link 和 router-view 就是由 vue-router 注册的全局组件 -->
  <div>
    <!-- router-link 负责跳转不同的页面，相当于 Vue 世界中的超链接 a 标签 -->
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link>
  </div>
  <!-- router-view 负责渲染路由匹配的组件，我们可以通过把 router-view 放在不同的地方，实现复杂项目的页面布局。 -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
