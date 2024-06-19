const fs=require("fs");

let n=Number(fs.readFileSync(0).toString());
let prob=1;

for(let i =1; i<=10; i++){
    prob *= i;
    if(prob >= n){
        console.log(i);
        break;
    }
};