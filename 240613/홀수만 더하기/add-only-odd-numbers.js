const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");
//console.log(input);
let sum=0;

for(let i =0; i < input.length; i++){
    let n = Number(input[i]);
    if(n % 2 === 1 && n % 3 === 0){
        sum +=n;
    }
}
console.log(sum);