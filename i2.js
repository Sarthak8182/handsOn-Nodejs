try{
    require('./i1.js')
    require('./i1.js')
    require('./i1.js')
} catch(err){
    console.log("err")
    throw new Error()
}