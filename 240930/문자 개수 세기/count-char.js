const fs=require("fs");
let input = fs. readFileSync(0).toString().trim().split("\n");
let [str,a]=input
let cnt=0;
for(let s of str){
    if(s === a) cnt++;
}
console.log(cnt)