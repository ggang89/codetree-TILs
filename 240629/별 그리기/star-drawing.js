const fs=require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let str=""

for(let i = 0; i < n; i++){
    str=""
    for(let j = 0; j <n-(i+1); j++){
        str +=" "
    }
    for(let k = 0; k <(2*i)+1; k++){
        str +="*"
    }
    console.log(str)
}
for(let i=0; i < n;i++){
    str=""//n=3 i= 1,2
    for(let j = 0; j<i+1; j++){//j= 1(2)/1 2(3) 
        str +=" "
    }
    for(let k = 0; k < (2*n)-(2*i)-3;k++){
        str +="*"
    }
    console.log(str)
}