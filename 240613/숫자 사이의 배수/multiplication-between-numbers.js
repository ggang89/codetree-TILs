const fs= require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a=Number(input[0]);
let b=Number(input[1]);

let sum=0;
let cnt=0;

for(i=a; i <=b; i++){
    if(i % 5 ===0 || i % 7 === 0){
        sum += i;
        cnt++;
    }
};
let average= (sum /cnt).toFixed(1);
console.log(sum,average);