const fs= require("fs");

let input= fs.readFileSync(0).toString().trim().split("\n");
let [n,...str] = input;

let str2="";
for(let s of str){
    str2 +=s
}
let strArr=str2.split(" ");
let strN =""


for(let a of strArr){
    strN +=a;
}
//console.log(strN) //123456789231231231284
console.log(strN[0]+strN[1]+strN[2]+strN[3]+strN[4])
console.log(strN[5]+strN[6]+strN[7]+strN[8]+strN[9])
console.log(strN[10]+strN[11]+strN[12]+strN[13]+strN[14])
console.log(strN[15]+strN[16]+strN[17]+strN[18]+strN[19])
console.log(strN[20])