const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split(" ");
let [a,b] =input;
//console.log(a,b)
if(a.length>b.length){
    console.log(a,a.length)
}else if(a.length<b.length){
    console.log(b,b.length);
}else{
    console.log(same)
}