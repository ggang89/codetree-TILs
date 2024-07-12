const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let str=""
for(let i = 0; i < input.length; i++){
        if(input[i] !== 0){
            if(input[i] % 2 !== 0){
            str += input[i] + 3 +" "
        }else if(input[i] % 2 === 0){
            str += input[i] / 2 +" "
        }
        }else if(input[i] == 0 ){
            break;
        }
        
} console.log(str)