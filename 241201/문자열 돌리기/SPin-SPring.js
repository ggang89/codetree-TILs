const fs= require("fs");

let input = fs.readFileSync(0).toString().trim();

let n = input.length;

for(let i = 0; i <= n; i++){
    console.log(input);
    input = (input.slice(-1)+input.slice(0,4))
}
