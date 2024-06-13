const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");
//console.log(input);
let sum=0;

for(let i =0; i < input.length; i++){
    input[i];
    if(input[i] % 2 === 1 && input[i] % 3 === 0){
        sum +=input[i];
    }
}
console.log(sum);