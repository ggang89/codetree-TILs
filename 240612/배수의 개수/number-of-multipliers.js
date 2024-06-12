const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let cnt_3 = 0;
let cnt_5 = 0;

for(let i = 0; i < input.length; i++){
    let n = Number(input[i]); //input요소 하나하나를 숫자로 변환
    if(n % 3 === 0){
        cnt_3++;
    }
     if(n % 5 === 0){
        cnt_5++;
    }
};
console.log(cnt_3,cnt_5);