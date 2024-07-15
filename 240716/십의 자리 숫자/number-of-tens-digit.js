const fs=require("fs");

let input = fs.readFileSync(0).toString().split(" ").map(Number);

let countArr=Array(10).fill(0);

for(let i = 0; i < input.length; i++){
   
    if(parseInt(input[i]/10)==0){
        continue;
    }
     countArr[parseInt(input[i]/10)]++ //30 50 14
     //if(input[i]==0) break;
};

for(let i= 1; i<10; i++){
    console.log(`${i} - ${countArr[i]}`)
}