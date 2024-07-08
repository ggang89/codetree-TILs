const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);
let cnt=0;
let sum=0;
for(let i of input){
    if(i === 0) break;
    if(i % 2 ===0){
        cnt++;
        sum +=i
    }
}console.log(cnt,sum)