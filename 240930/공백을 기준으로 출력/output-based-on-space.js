const fs=require("fs");
let input =fs.readFileSync(0).toString().trim().split("\n");
let [a,b]=input;
//console.log(a,b)
let strA="";
let strB=""
for(let e of a){
    if(e === " ") continue;
    strA +=e
}
for(let e of b){
    if(e === " " )continue;
    strB +=e
}
console.log(strA+strB)