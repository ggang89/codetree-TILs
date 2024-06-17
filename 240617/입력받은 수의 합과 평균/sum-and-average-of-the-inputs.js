const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");

let n=Number(input[0]);

let sum=0;


for(let i = 1; i <= n ; i ++){
    let x = Number(input[i]);
    sum += x;
};
let average=sum/n;
console.log(sum,average.toFixed(1));