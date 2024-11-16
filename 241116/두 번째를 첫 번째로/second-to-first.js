const fs=require("fs");

let input =fs.readFileSync(0).toString();

let targetStr = input[1]; //바꿔야할 문자열
let changeStr = input[0]; //바꿀 문자

for (let i = 0; i <input.length; i++){
    if(input[i]===targetStr){
        input = input.slice(0,i)+changeStr+input.slice(i+1)
    }
}console.log(input)
