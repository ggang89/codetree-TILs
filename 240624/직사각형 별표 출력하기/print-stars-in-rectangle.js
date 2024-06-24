const fs=require("fs");

let input = fs.readFileSync(0).toString().split(" ");
let n =Number(input[0]);
let m =Number(input[1]);
let str="";
for(let i=1; i<=n;i++){
    str=""
    for(let j=1; j <= m; j++){
        str +="*"+" "
    }console.log(str);
}