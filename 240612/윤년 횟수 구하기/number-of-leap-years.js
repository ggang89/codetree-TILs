const fs=require("fs");

let n=Number(fs.readFileSync(0).toString().trim());

//윤년 => 4로 나누어 떨어지는 해(100으로 나누어 떨어지지 않음) /100으로 나누어 떨어지고, 400으로 나누어 떨어지는 해
let cnt=0;

for(let i = 1; i <= n; i++){
    if(i % 4 === 0 && i % 100 != 0){
        cnt++;
    }else if(i % 100 === 0 && i % 400 === 0){
        cnt++;
    }
    //한줄로 => if ((i % 4 === 0 && i % 100 != 0) || i % 400 === 0) 
}console.log(cnt);