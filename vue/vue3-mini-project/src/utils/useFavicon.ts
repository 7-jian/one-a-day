import {ref, watch} from 'vue'

export default function useFavicon( newIcon: any ) {
  const favicon = ref(newIcon)

  const updateIcon = (icon: { [x: string]: any }) => {
    document.head
      .querySelectorAll(`link[rel*="icon"]`)
      .forEach((el: any) => el.href = `${icon}`)
  }
  const reset = () => favicon.value = '/vite.svg'

  watch( favicon,
    (i) => {
      updateIcon(i)
    }
  )
  return {favicon,reset}
} 