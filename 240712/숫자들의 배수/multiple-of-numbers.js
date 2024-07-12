const fs=require("fs");

let n = Number(fs.readFileSync(0).toString().trim())
let i = 1;
let cnt = 0
let str=""
while(true){
    
    let result= n*i;
    str += result+" "
    i++
    if(result % 5 === 0){
        cnt++
        //console.log("cnt",cnt)
        if(cnt == 2 )break;
    }
}
console.log(str)