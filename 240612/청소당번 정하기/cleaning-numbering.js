const fs=require("fs");

let n=Number(fs.readFileSync(0).toString());

let a=0;//교실청소 2일마다
let b=0;//복도 청소 3일마다
let c=0;//화장실 청소 12일마다

for(let i=0; i<=n; i++){
 if(i % 2 ===0 && !( i % 3 === 0) && !(i % 12 === 0)){
    a++;
 }
 if(i % 3 === 0 && !(i % 12 === 0)){
    b++;
 }
 if(i % 12 === 0 && i !=0 ){
    c++;
 }
};
console.log(a,b,c);