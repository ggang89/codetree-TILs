const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");
let index=0;
let sum=0;
let cnt=0;
while(true){
    let old=Number(input[index]);
    index++;
    if(old < 30 && 19<old){
    sum += old;
    cnt++;
    } else if(old >= 30 || old <=19){
        break;
    }
};
console.log((sum/cnt).toFixed(2));