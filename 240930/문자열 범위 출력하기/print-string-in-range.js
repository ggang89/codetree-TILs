const fs=require("fs")
let input = fs.readFileSync(0).toString().trim();
let str=""
for(let i =2 ; i <10; i++){
    str += input[i]
}
console.log(str)