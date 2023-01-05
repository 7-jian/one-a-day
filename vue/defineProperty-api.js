// @ts-nocheck
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

let getDouble = n=>n*2
let obj = {}
let count = 1
let double = getDouble(count)

// 使用 defineProperty 代理了 count 属性。就对 obj 对象的 value 属性实现了拦截，当访问 obj.value 的时候，就会执行 get 函数，当我们修改 obj.value 的时候，就会执行 set 函数。
Object.defineProperty(obj,'count',{
    // 读取 count 属性的时候执行 get 函数
    get(){
        return count
    },
    // 修改 count 属性的时候执行 set 函数
    set(val){
        count = val
        double = getDouble(val)
    }
})
console.log(double)  // 打印2
obj.count = 2
console.log(double) // 打印4  有种自动变化的感觉

// 但删除 obj.count 属性，set 函数就不会执行，double 还是之前的数值。这也是为什么在 Vue 2 中，需要 $delete 一个专门的函数去删除数据。

delete obj.count
console.log(double) // doube还是4