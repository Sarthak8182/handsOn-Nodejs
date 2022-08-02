console.log("Welcome to calc");
const a = Number(process.argv[2]);
const op = process.argv[3];
const b = Number(process.argv[4]);

console.log(`${a} and ${b} are two numbers`);

switch(op){

    case '+':
        console.log(`Result is ${a + b}`);
    break;

    case '-':
        console.log(`Result is ${a-b}`);
    break;
    case 'x':
        console.log(`Result is ${a*b}`);
    break;
    case '/':
        console.log(`Result is ${a/b}`);
    break;
}