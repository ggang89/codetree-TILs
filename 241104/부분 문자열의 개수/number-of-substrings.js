const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [strA, strB] = input;
let n= strB.length;
let cnt = 0;

for(let i = 0; i <= strA.length; i++){
    if(strA.slice(i,i+n) === strB) cnt++
}console.log(cnt)