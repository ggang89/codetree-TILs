const fs = require("fs")

let input=fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]) //원소의 개수
let arr =input[1].split(" ").map(Number);
let str=""
for(let i = 0; i < n; i++){
    str +=arr[i]*arr[i]+" "
}
console.log(str)