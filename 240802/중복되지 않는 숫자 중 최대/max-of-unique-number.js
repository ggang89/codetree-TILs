const fs= require("fs");
let input=fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number);

let max=arr[0]
let cnt=0
for(let i = 0; i < n; i++){
    if(arr[i] > max){
         max = arr[i]
        cnt++;
    }
    if(cnt > 1) max=-1
}
console.log(max)