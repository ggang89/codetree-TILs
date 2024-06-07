const fs=require("fs");

let str=fs.readFileSync(0).toString().trim();

let result="";

for(i = 1; i <= 8; i++ ){
    result +=str;
}
console.log(result);