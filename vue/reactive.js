// @ts-nocheck
import {reactive,computed,watchEffect} from 'vue'

let obj = reactive({
    count:1
})
let double = computed(()=>obj.count*2)
obj.count = 2

// watchEffect与watch监听的区别 1. watchEffect 不需要指定监听的属性，他会自动的收集依赖，只要我们回调中引用到了响应式的属性，那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。 2. watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。 3. watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖变化，要写在watchEffect的回调内。
watchEffect(()=>{
    console.log('数据被修改了',obj.count,double.value)
})