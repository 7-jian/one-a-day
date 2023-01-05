<template>
  <h1>这是关于页面</h1>
  <Rate :value="score" />
  <!-- <Rate :value="3" ></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate> -->
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Rate from '../components/Rate.vue'
  let score = ref(3)
</script>