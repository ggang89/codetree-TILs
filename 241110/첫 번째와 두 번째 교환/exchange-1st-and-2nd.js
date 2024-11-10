const fs =require("fs");

let input = fs.readFileSync(0).toString().trim();

let a = input[0];
let b = input[1];


for(let i = 0; i < input.length; i++){
    if(input[i] === a){
        input = input.slice(0,i) + b + input.slice(i+1);
    }else if(input[i] === b){
        input = input.slice(0,i) + a + input.slice(i+1);
    }
}
console.log(input)