const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");//[ 'Y 38', 'N 36', 'Y 40' ]

let cntArr=Array(4).fill(0) //진료소

for(let i = 0; i < 3; i++){
    let x=input[i].split(" ") //y, 38
    if(x[0] === 'Y' && Number(x[1]) >= 37){
        cntArr[0]++
    }else if(x[0] === "N" && Number(x[1]) >= 37){
        cntArr[1]++
    }else if(x[0] === "Y" && Number(x[1]) <= 36){
        cntArr[2]++
    }else{
        cntArr[3]++
    }
}
if(cntArr[0] >=2){
    cntArr.push("E")
}
 let str=""
for(let i=0;i<cntArr.length;i++){
   
    str += cntArr[i]+" "
}
console.log(str)