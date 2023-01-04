<template>
  <h1>这是首页</h1>
  <button @click="loading">更换网站小图标</button>
  <button @click="resets">重置网站小图标</button>
  <button @click="toggle">浏览器全屏</button>
  <TodoList />
</template>

<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
import useFavicon from '../utils/useFavicon'
import { useFullscreen } from '@vueuse/core'

let {favicon, reset} = useFavicon(null)
function loading(){ 
  favicon.value = '/vue.svg'
}
function resets(){ 
  reset()
}

const { isFullscreen, enter, exit, toggle } = useFullscreen()

</script>