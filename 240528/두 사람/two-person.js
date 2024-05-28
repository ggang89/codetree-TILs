const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");//[ '20 M', '20 W' ]

let input1=input[0].split(" ");//[ '20', 'M' ]

let input2=input[1].split(" ");//['20', 'w' ]

let s1_year=Number(input1[0]);
let s1_gender=input1[1];

let s2_year=Number(input2[0]);
let s2_gender=input2[1];

//if(s1_gender === 'M' || s2_gender === 'M'){
//    console.log(1);
//}else{
//    console.log(0);
//}
console.log(s1_gender === 'M' || s2_gender === 'M' ? 1:0);