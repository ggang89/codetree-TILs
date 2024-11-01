const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [str,targetStr] = input;
let cnt=0
for(let i=0; i<str.length-1;i++){
    if(str[i]+str[i+1]===targetStr){
        cnt++;
    }
}
console.log(cnt)