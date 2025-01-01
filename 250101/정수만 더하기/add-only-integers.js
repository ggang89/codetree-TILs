const fs = require("fs");

let input =fs.readFileSync(0).toString().trim();

let num = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] >= '0' && input[i] <= '9'){
        num += Number(input[i]);
    }
}
console.log(num)

