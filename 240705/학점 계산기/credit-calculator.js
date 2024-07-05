const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split("\n");

let n =Number(input[0]) //과목수

let arr=input[1].split(" ").map(Number);

let sum=0;

for(let a of arr){
    sum += a
}
let ave=sum/n
console.log(ave.toFixed(1))

if(ave >= 4.0){
    console.log("Perfect")
}else if(ave >= 3.0){
    console.log("Good")
}else{
    console.log("Poor")
}