<template>
  <h1>这是关于页面</h1>
  <transition name="fade">
    <h2 v-if="showTitle">你好 About</h2>
  </transition>
  <button @click="toggle">toggle</button>
  <!-- <Rate :value="score" @update-rate="update" /> -->
  <Rate v-model="score"><img width="14" src="/vite.svg" /> 课程评分：</Rate>
  <!-- <Rate :value="3" ></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate> -->
  <div class="box" :style="{ width: width + 'px' }"></div>
  <button @click="change">click</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Rate from '../components/Rate.vue'
  let score = ref(2)
  // function update(num:number){
  //   score.value = num
  // }

  let width = ref(30)
  function change() {
    width.value += 10
  }

  let showTitle = ref(true)
  function toggle() {
    showTitle.value = !showTitle.value
  }
</script>

<style scoped>
.box {
  background: #d88986;
  height: 30px;
  /* div 的 width 属性需要过渡，过渡时间是 1 秒，并且过渡方式是线性过渡 */
  /* transition: width 1s linear;  */

  /* animation 和 keyframe 的组合实现动画 */
  /* width: 30px; */
  position: relative;
  animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>