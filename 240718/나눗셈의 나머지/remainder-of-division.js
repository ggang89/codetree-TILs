const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ").map(Number);//[1000, 4]

let a =input[0]
let b=input[1]
let arr=[]
let i=0
while(true){
    a = a/b;
    let c= parseInt(a % b);
    arr.push(c)
    i++;
    if(a <=1) break;
}
//console.log(arr)//[ 2, 2, 3, 3, 0 ]
let cnt=Array(arr.length).fill(0);
for(let i = 0; i < arr.length; i++){
    cnt[arr[i]]++; 
}
//console.log(cnt)//[1,0,2,2]
let result=cnt.map(Number)
let result2=0
for(let i = 0; i < result.length; i++){
  result2 += result[i]*result[i]
}
console.log(result2)