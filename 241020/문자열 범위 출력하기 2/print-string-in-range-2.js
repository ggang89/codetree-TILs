const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[1]);
let str = input[0];
let backstr="";
let cnt=0;
//console.log(str)
for(let i = str.length-1; i >= str.length - n; i--){
    if(cnt >= n) break;
    backstr +=str[i];
    cnt ++;
    
}
console.log(backstr)