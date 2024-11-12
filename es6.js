var a= 'abc';
let nameUsingLet = "randomLet";
a= 'def';
console.log(a);
const aConst='a'

if(true){
    var b = 'qwerty';
    let bInsideIf = 'random2';
    aConst = 'b'
}

for (let index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index);
    },100);
    
}
if(true){
    var b = 'random3'
}

function c(){
    var name = "Sarthak"
}
c();

// console.log(b)
// console.log(nameUsingLet)
// console.log(name)
// console.log(bInsideIf)