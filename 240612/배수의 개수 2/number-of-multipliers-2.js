const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");
//input의 요소는 문자
let cnt=0;

for(let i = 0; i <input.length; i++){
    let n=Number(input[i]);
    if(n % 2 === 1){
        cnt++;
    }
}
console.log(cnt);