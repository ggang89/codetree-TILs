const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[10]//e

for(let i = 0; i <input.length; i++){
    let a = input[i].length - 1
    if(input[i][a] === n && input[i].length >1 ){
        console.log(input[i])
    }
}