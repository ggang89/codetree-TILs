const fs=require("fs");

let input =fs.readFileSync(0).toString().trim().split("\n");

let arr=Array(4);

for(let i = 0; i <4; i++){
    
    arr[i]=input[input.length-1-i]
}
for(let a of arr){
  console.log(a)
}