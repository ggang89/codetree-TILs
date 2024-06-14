const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let sum=0;
let count=0


for(let i = 0;i <10; i++ ){
    let n =Number(input[i]);
    if(0<= n && n <=200){
        sum += n;
        count++;
    }
}
let average=(sum /count).toFixed(1);
console.log(sum, average);