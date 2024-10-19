const fs=require("fs");

let input = fs.readFileSync(0).toString().trim();

for(const i of input){
    console.log(i)
}