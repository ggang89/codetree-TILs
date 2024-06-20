const fs=require("fs");

let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;
while(true){
    if(n % 2 === 0){
       n = n / 2;
       cnt++;
    }else if(n % 2 === 1){
        n = (n * 3) + 1;
        cnt++;
    }
    if(n === 1){
        console.log(cnt);
        break;
    }
}