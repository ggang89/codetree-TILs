const fs=require("fs");
let input=fs.readFileSync(0).toString().split(" ");
let h=Number(input[0]);
let w=Number(input[1]);
let bmi=Math.trunc((10000*w)/(h*h)); //Math.truc()=>버림

console.log(bmi);
if(bmi>25){
    console.log("Obesity");
}