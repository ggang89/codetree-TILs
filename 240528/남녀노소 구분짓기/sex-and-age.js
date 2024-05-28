const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");

let gender=Number(input[0]);
let year=Number(input[1]);

//console.log(gender,year);// 0 23

if(gender === 0){
   if(year >= 19){
    console.log("MAN")
   } else{
    console.log("BOY")
   }
}else if(gender === 1){
    if(year >= 19){
        console.log("WOMAN")
    }else{
        console.log("GIRL")
    }
};