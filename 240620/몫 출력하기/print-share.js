const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");

let index=0;
let cnt=0;

while(true){
    let n=Number(input[index]);
    index++;
    if(n % 2 === 1){
        continue;
    }else {
        result =parseInt(n / 2);
        cnt++;
    }console.log(result);
    if(cnt >= 3){
        
        break;
    }
}