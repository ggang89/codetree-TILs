const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);

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

for(let i of input){
    if(i >500) minArr.push(i)  //console.log(minArr) [ 872, 887 ]
}
for(let a of minArr){
    //console.log(minArr,a)
 if(a <= minArr[0]) min =a 
}

 console.log(mx,min)