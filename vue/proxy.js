// @ts-nocheck
// 通过 new Proxy 代理了 obj 这个对象，然后通过 get、set 和 deleteProperty 函数代理了对象的读取、修改和删除操作，从而实现了响应式的功能。

let getDouble = n=>n*2
let obj = {}
let count = 1
let double = getDouble(count)


let proxy = new Proxy(obj,{
  get : function (target,prop) {
    return target[prop]
  },
  set : function (target,prop,value) {
      target[prop] = value;
      if(prop==='count'){
          double = getDouble(value)
      }
  },
  deleteProperty(target,prop){
      delete target[prop]
      if(prop==='count'){
          double = NaN
      }
  }
})
console.log(obj.count,double)
proxy.count = 2
console.log(obj.count,double) 
delete proxy.count
// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
console.log(obj.count,double) 
// Proxy 实现的功能和 Vue 2 的 definePropery 类似，它们都能够在用户修改数据的时候触发 set 函数，从而实现自动更新 double 的功能。而且 Proxy 还完善了几个 definePropery 的缺陷，比如说可以监听到属性的删除。
// Proxy 是针对对象来监听，而不是针对某个具体属性，所以不仅可以代理那些定义时不存在的属性，还可以代理更丰富的数据结构，比如 Map、Set 等，并且我们也能通过 deleteProperty 实现对删除操作的代理。