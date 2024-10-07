const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let result=0;

for(let i = 0; i <input.length; i++){
    result +=input[i].length;
}
console.log(result)