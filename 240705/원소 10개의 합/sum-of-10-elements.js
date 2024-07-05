const fs=require("fs")

let arr=fs.readFileSync(0).toString().split(" ");
let sum=0
for(const a of arr){
    sum += Number(a)
}console.log(sum)