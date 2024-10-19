const fs= require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
let n= Number(input[0]);
let c=input[n+1];

let cnt=0;
let len=0;
let avg=(len/ cnt).toFixed(2);

for(let i = 1; i < n; i++){
    if(input[i][0] === c){
        cnt ++;
        len +=input[i].length;
    }
};
console.log(cnt,(len/cnt).toFixed(2));