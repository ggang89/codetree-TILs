const fs= require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let str="";

for(let i = 0; i < n; i++){
    str="";
   
    for(let k = 0; k < i; k++){
        str +="  "
    }
     for(let j = 0; j < (n*2)-(2*i)-1; j++){
        str +="* "
    }
    console.log(str)
}