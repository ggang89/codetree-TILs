const fs=require("fs");

let input =fs.readFileSync(0).toString().trim().split(" ");

for(let i = 9; i >= 0; i--){
    console.log(input[i])
}