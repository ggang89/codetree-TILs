const fs=require("fs");

let input= fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let nrr = input[1].split(" ").map(Number);
//가장 큰 숫자를 순서대로 2개 출력하시오

// console.log(nrr) // 6, 5, 10, 2, 5, 2, 8,  9, 2, 3
let c=nrr.sort((a,b)=>(a-b))
console.log(c[9],c[8])