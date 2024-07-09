const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum=0
let arr=[]

for(let i=0; i < input.length; i++){
    if(input[i] === 0) {
        k=i; //0이 되는 인덱스번호를 k에 저장
        break;
    }
}
console.log(input[k-1]+input[k-2]+input[k-3]);