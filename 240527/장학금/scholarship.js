const fs=require("fs");

let n =fs.readFileSync(0).toString().split("\n");

let n1=Number(n[0]);
let n2=Number(n[1]);

if(n1 >= 90 && n2>=95){
    console.log(100000);
}else if(n1>=90 && n2 >= 90){
    console.log(50000);
}else{
    console.log(0);
}