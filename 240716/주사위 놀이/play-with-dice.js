const fs=require("fs")

let input=fs.readFileSync(0).toString().split(" ").map(Number);//숫자 10번 나옴

let arr=Array(7).fill(0);

for(let i = 0; i < 10; i++){
    arr[input[i]]++;
}
for(let i=1; i <7; i++){
    console.log(`${i} - ${arr[i]}`)
}