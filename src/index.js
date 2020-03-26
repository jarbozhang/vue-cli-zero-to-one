const fn = () => 1
let num = 3 ** 2
Promise.resolve().finally()
console.log(fn())
console.log(num)
const obj = {test1: {test2: {test3: 'yes'}}}
console.log(obj?.test1?.test2?.test3)
console.log(obj?.test1?.test2?.test3?.test4)
