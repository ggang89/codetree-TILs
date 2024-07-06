const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr=[]

for(let i of input){
    if(i === 0) break;
    arr.push(i)
}console.log(arr.reverse().join(" "))