const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let n = Number(input[1]);

let result = a;

for(i = 1; i <= n; i++){
   
   console.log(result+n*i);
 

}