import {ref, onMounted, onUnmounted} from 'vue'

export function useMouse(){
  const x = ref(0)
  const y = ref(0)
  interface Coordinate {
    pageX: number;
    pageY: number;
  }
  function update(e:Coordinate) {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    console.log('[ 111 ] >', 111)
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  console.log('[ x, y ] >', x.value, y.value)
  return { x, y }
}