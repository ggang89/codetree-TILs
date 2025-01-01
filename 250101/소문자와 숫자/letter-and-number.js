const fs= require("fs");

let input = fs.readFileSync(0).toString();

let str="";

for(let i = 0; i <input.length; i++){
    if((input[i] >= 'A' && input[i] <= 'Z') || (input[i] >='a' && input[i] <= 'z')){
        str += input[i].toLowerCase();
    }else if(input[i] >= '0' && input[i] <='9'){
        str += input[i];
    }
}
console.log(str)