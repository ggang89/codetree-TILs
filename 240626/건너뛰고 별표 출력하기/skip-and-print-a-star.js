const fs =require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let str="";

for(let i = 1; i <= n; i++){
    str="";
    for(let j = 0; j < i; j++){
        str +="*"
    }
    console.log(str,"\n")
}
for(let i = 1; i <= n-1; i++){
    str="";
    for(let j = 1; j <= n-i; j++){
        str +="*"
    }
    console.log(str,"\n")
}