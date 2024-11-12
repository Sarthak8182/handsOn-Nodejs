// // // function* gen1(){
// // //     console.log(yield 1)
// // //     console.log(yield 2)
// // //     console.log(yield 3)
// // // }

// // // const iterator =    gen1();
// // // console.log(iterator.next('a').value)
// // // console.log(iterator.next('b').value)
// // // console.log(iterator.next('c').value)

// // // let arr = [1,2]
// // // arr.customproperty = true;
 
// // // for(const e of arr){
// // //     console.log(e)
// // // }


// // // const q = Queue();
// // // q.enqueue(1)
// // // q.dequeue(2);
// // // const r1 =  q.dequeue() ===1
// // // const r2 =  q.dequeue() ===2

// // // console.log(r1 && r2)

// // // function Queue(){
// // //     const b=[]
// // //     return{
// // //         enqueue: b.unshift,
// // //         dequeue: b.shift
// // //     }
// // // }

// // async function apicall(){
// //     return new Promise(resolve => {
// //         setTimeout(()=>{
// //             resolve('b')
// //         },50);
// //         });
        
// // }

// // async function l(){
// //     setTimeout(()=>console.log('a'),10);
// // console.log(await apicall());
// // console.log('c')
// // }

// // l()

// // function a(v1, v2, callback){
// //     setTimeout(()=>{
// //         callback(v1+v2)
// //     },1)
// // }
// // const res = c(a);
// // res(1,2).then(([value])=> console.log(value))

// // function c()

// // require('./module2')
// // console.log("1");

// // require('./module2')
// // console.log("2")
// import express from "express";
// import fs from "fs"
// const zlib = require('zlib')
// const file = 'info.txt'

// const {Transform} = require("stream");
// const p = new Transform({
//     transform(chunk, encoding, callback){
//         process.stdout.write("processing\n")
//         callback(null, chunk)
//     }
// });

// // const app =express();
// // const fs = 

const {spawn} = require ("child_process")

const files = spawn("find . -type f | wc -l")
console.log(files)