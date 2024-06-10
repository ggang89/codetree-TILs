const fs=require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a=Number(input[0]);
let b=Number(input[1]);

let result=a;

for(i = a; i < b; ){
    if(a<b){
        if(i % 2 === 1){
        i=i*2;
        result +=" "+i;
        
        }else if(i % 2 === 0){
         i=i+3;
        result += " " +i;
    }
    }
    
};
console.log(result);