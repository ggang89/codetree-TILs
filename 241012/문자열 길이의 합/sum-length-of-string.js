const fs=require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
let [n,...str]=input;

let cnt=0;
let strN=0;
//console.log(n, str)//3 [ 'asdfghjkl', 'a', '1122dre' ]

for(let i = 0; i < n; i++){
    strN += str[i].length;
    if(str[i][0]=== "a") cnt++
}
console.log(strN, cnt)