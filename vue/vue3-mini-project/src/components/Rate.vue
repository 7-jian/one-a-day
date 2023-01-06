<template>
  <div :style="fontStyle">
    <!-- {{ rate }} -->
    <!-- 插槽 -->
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span
        v-for="num in 5"
        :key="num"
        @mouseover="mouseOver(num)"
      >☆</span>
      <span class="hollow" :style="fontwidth">
      <span
        v-for="num in 5"
        :key="num"
        @click="onRate(num)"
        @mouseover="mouseOver(num)"
      >★</span>
      </span> 
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, defineEmits, computed } from 'vue'
  // defineProps 规范传递数据的格式
  let props = defineProps({
    value: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'orange'
    }
  })
  // let rate = computed(() => 
  //   "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
  // )
  // let rate = computed(() => 
  //   "★★★★★☆☆☆☆☆".slice(5 - props.modelValue, 10 - props.modelValue)
  // )
  const themeObj = { 
    'black': '#000',
    'white': '#fff', 
    'red': '#f5222d',
    'orange': '#fa541c', 
    'yellow': '#fadb14', 
    'green': '#73d13d', 
    'blue': '#40a9ff',
  }
  const fontStyle = computed(()=> { 
    // props.theme as keyof typeof themeObj : 将props.theme转换为themeObj的key
    let key:keyof typeof themeObj= props.theme as keyof typeof themeObj
    return `color: ${themeObj[key]};`
  })

  // 评分宽度
  // let width = ref(props.value)
  let width = ref(props.modelValue)
  function mouseOver(i:number){
    width.value = i
  }
  function mouseOut(){
    // width.value = props.value
    width.value = props.modelValue
  }
  function isDecimal(num:number){
    return num % 1 !== 0
  }
  console.log('[ width.value ] >', width.value)
  const fontwidth = computed(() =>
    // ★: 0.81em 半个：0.827em
    `width: ${ isDecimal(width.value) ? width.value * 0.827 : width.value * 0.81 }em;`
  )
  // let emits = defineEmits<{
  //   (e: 'update-rate', id: number): void
  // }>()
  let emits = defineEmits(['update:modelValue'])
  function onRate(num:number){ 
    // emits('update-rate', num)
    emits('update:modelValue', num)
  }
</script>

<style scoped>
.rate {
  display: inline-block;
  position: relative;
}
.rate > span.hollow {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>