const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);
//951 122 379 790 286 468 931 724 1000 901 
let mx=0
let min
let mxArr=[]
let minArr=[]


for(let i of input){
    if(i < 500) mxArr.push(i) 
}
//console.log(mxArr)// 12, 178, 245, 324,  321, 124,  23, 443
for(let a of mxArr){
    if(a > mx) mx = a
}
//console.log("큰수",mx)
for(let i of input){
    if(i >500) minArr.push(i)  
}
//console.log(minArr) //[ 872, 887 ][ 951, 790, 931, 724, 1000, 901 ]
// for(let a of minArr){
//     //console.log(minArr,a)
//     min=minArr[0] //951
    
//  if(a < min){ 
//     console.log(a)
//     min =a
//  } 
// }
let c=minArr.sort((a,b)=>a-b);
console.log(mx,c[0])