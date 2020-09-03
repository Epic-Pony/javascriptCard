/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-09-03 14:06:05
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-03 14:47:35
 */
//1.三元运算符
let somethingTrue = true
// somethingTrue? doa() : doB()

//2.短路运算或
const defaultValue = "javascrit"
let someValue = null
let someThingB = someValue || defaultValue

// console.log(someThingB)

//3.for循环
// let someValues = [1, 2, 3]
// for (let val in someValues) {
//     console.log(val)
// }
// let = obj = {
//     'key1': 'A',
//     'key2': 'B',
//     'key3': 'c',
// }

// for (let key in obj) {
//     console.log("key", key)
// }

//4. 值的对象映射
let x ='x', y = 'y'
let obj = {x,y}
// console.log(obj)

//5. Object.entries()
const credit = {
    producer: '大千世界',
    name: '前端小智',
    rating: 9
}
const arr = Object.entries(credit)
// console.log(arr)

//6.模版字符串
let userName = 'pony'
let age = 27
let introduce = `我是${userName}，今年${age}岁`
// console.log(introduce)

//7. 解构赋值
// import {observe,action,runInAction} from 'mbox'

//8.多行字符串
let muitilineString = `some string\n
with multi-line of\n
characters\n`
// console.log("muitilineString", muitilineString)

//9.Array.find简写

const pets = [
    {
        type:'Dog',
        name:'max'
    },
    {
        type:'Cat',
        name:'karl',
    },
    {
        type:'Dog',
        name:'Tommy'
    },
]
let pet = pets.find(res => res.type == "Dog"&&res.name == "Tommy")

// console.log(pet)

//函数设置默认值

function area(h,w) {
    if(!h) {
        h = 1; 
    }
    if(!w) {
        w = 1
    }
    return h*w
}
//es6里面
function newArea(h = 1,w = 1) {
    return h*w
}

//箭头函数

let sayHello = name => {
    return '你好' + name
}
// console.log(sayHello('pony'))

//隐式返回
let someFuntionThat = value => value ;
// console.log(someFuntionThat('pony'))

//函数必须有参数
function mustHavePatamMethod(param) {
    if(param === undefined) {
        throw new Error('Hey You must Put Some Param!')
    }
    return param;
}
// mustHavePatamMethod('222')

//重写
mustHaveCHeck = () => {
    throw new Error('Missing parameter')
}
methodShouldHaveParam = (param = mustHaveCHeck()) => param;

// methodShouldHaveParam(888);

