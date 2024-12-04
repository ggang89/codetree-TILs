const fs= require("fs");

let input=fs.readFileSync(0).toString().trim().split(" ");

let [a,b] = input;

let astr=Number(a.charCodeAt(0));
let bstr=Number(b.charCodeAt(0));
//console.log(astr,bstr)
let cha=0;

if(astr > bstr){
   cha= astr-bstr
}else{
    cha=bstr-astr
}

console.log(astr+bstr,cha)