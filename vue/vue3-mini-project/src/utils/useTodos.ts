import { ref, watchEffect, computed } from "vue"
import useStorage from './useStorage'

export default function useTodos() {
  let title = ref('')
  // let todos = ref([{ title: '学习Vue', done: false }])
  // let todos = ref(JSON.parse(localStorage.getItem('todos')||'[]'))
  let todos = useStorage('todos', '[]')

  // watchEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos.value))
  // })

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter((v: { done: any }) => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter((v: { done: any }) => !v.done).length
  })

  let all = computed(() => todos.value.length)

  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value) {
      todos.value.forEach((todo: { done: boolean }) => {
        todo.done = value
      })
    }
  })

  return { title, todos, addTodo, clear, active, all, allDone }
}