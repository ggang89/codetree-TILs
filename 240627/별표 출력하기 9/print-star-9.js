const fs=require("fs");

let n =Number(fs.readFileSync(0).toString().trim());

let str="";

for(let i = 0; i < n; i++){
    str="";
    for(let j = 0; j < n-i-1; j++){ 
        str +="  "
    }
    for(let k = 1; k <=(i*2)+1; k++){
        str +="* "
    }
    console.log(str)
}