const fs=require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let sum=a;
//let sum=0으로 해줘야 함. ""으로 하면 문자열로 더해짐

for(let i=a; i <=b; i++){
    sum +=i;
}
console.log(sum-a);
//sum을 0으로 시작하면 a를 빼줄 필요 없다