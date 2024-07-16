const fs=require("fs");

let input = fs.readFileSync(0).toString().split(" ").map(Number);

let cntArr = Array(11).fill(0);

for(let i =0; i <= 100; i++){
    if(input[i] === 0) break;
    let x= parseInt(input[i] /10);
    cntArr[x]++;
}
//console.log(cntArr) // 0 0 0 0 1 1 2 0 2 1 2
console.log(`100 - ${cntArr[10]}`)
console.log(`90 - ${cntArr[9]}`)
console.log(`80 - ${cntArr[8]}`)
console.log(`70 - ${cntArr[7]}`)
console.log(`60 - ${cntArr[6]}`)
console.log(`50 - ${cntArr[5]}`)
console.log(`40 - ${cntArr[4]}`)
console.log(`30 - ${cntArr[3]}`)
console.log(`20 - ${cntArr[2]}`)
console.log(`10 - ${cntArr[1]}`)