const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");
//console.log(input);
let n=Number(input[0]);

let sum=0;

for(i=1; i<=n; i++){
    let x= input[i];
    if(x % 2 ===1 && x % 3 ===0){
        sum +=x;
    }
}

console.log(sum);