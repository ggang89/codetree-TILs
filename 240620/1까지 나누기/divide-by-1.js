const fs=require("fs");

let n = Number(fs.readFileSync(0).toString());
let cnt=0;
let i =1;

while(true){
    n = Math.floor(n / i);
    i++;
    cnt++;
    if(n === 0){
        console.log(cnt);
        break;
    } 
}