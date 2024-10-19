const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[1]);
let str = input[0];
let backstr="";
//console.log(str)
for(let i = str.length-1; i >= str.length - n; i--){
    backstr +=str[i]
}
console.log(backstr)
// for(let i = 14; i>14-11; i--){
//     console.log(i)
// }