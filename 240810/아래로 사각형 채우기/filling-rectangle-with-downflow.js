const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(()=>Array(n).fill(0));


for(let i = 0; i < n; i++){
    let num = 1+i
    for(let j = 0; j < n; j++){
        arr2d[i][j] = num
        num +=n;
    }

}

for(let arr of arr2d){
    let str="";
    for(let a of arr){
        str += a+" "
    }
    console.log(str)
}