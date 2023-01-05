<template>
  <div :style="fontStyle">
    <!-- {{ rate }} -->
    <div class='rate' @mouseout="mouseOut">
      <span
        v-for='num in 5'
        :key="num"
        @mouseover="mouseOver(num)"
      >
        ☆
      </span>
      <span class='hollow' :style="fontwidth">
      <span
        v-for='num in 5'
        :key="num"
        @mouseover="mouseOver(num)"
      >
          ★
        </span>
      </span> 
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, computed } from 'vue'
  // defineProps 规范传递数据的格式
  let props = defineProps({
    value: {
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
  let width = ref(props.value)
  function mouseOver(i:number){
    width.value = i
  }
  function mouseOut(){
    console.log('[ props.value ] >', props.value)
    width.value = props.value
  }
  const fontwidth = computed(() =>
    `width: ${width.value + 1}em;`
  )
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
  left: -6px;
  width: 0;
  overflow: hidden;
  height: 26px;
}
</style>