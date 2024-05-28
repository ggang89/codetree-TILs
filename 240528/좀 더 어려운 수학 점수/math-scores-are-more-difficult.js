const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");

let a=input[0];//80 90
let b=input[1];//90 80

let aa=a.split(" ");//['80','90']
let bb=b.split(" ");

let aMath = Number(aa[0]);
let aEng = Number(aa[1]);

let bMath=Number(bb[0]);
let bEng=Number(bb[1]);

if(aMath > bMath ){
    console.log("A");
}else if(bMath > aMath){
    console.log("B");
}
else if(aMath === bMath && aEng > bEng){
    console.log("A")
}else if(aMath === bMath && bEng > aEng){
    console.log("B");
}