<template>
  <h1>这是首页</h1>
  <TodoList />
</template>

<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
import {useMouse} from '../utils/mouse'

let {x,y} = useMouse()
</script>