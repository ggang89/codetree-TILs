const fs=require("fs");

let n=Number(fs.readFileSync(0).toString().trim());

//1. 먼저 2월인지 판단한다. 2월이면 28일 출력
//2. 2월이 아니면 7보다 같거나 작은지, 7보다 큰지 판단한다
//(7월에서 8월로 넘어가는 기점에 홀수달과 짝수달의 일수가 달라짐)
//3. 7보다 작거나 같은 달은 홀수달이 31,짝수달은 30일이고
//   7보다 큰 달은 홀수달이 30, 짝수달이 31일이다

if (n === 2) {
    console.log(28);
}
else if (n <= 7) {
    if (n % 2 === 1) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}
else {
    if (n % 2 === 0) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}