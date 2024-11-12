function add(a,b,callbackfn){
    // setTimeout(()=>{
        callbackfn(a+b);
// },1000)
}

// const result = add(5,7, (res)=>{
//     console.log(res)
// });
// console.log(result)

// callback chaining
add(1, 1, (result)=>{
    add(result, 5, (result2)=>{
        add(result2, 4, (result3)=>{
            console.log(result3)
        })
    });
});