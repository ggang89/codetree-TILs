const fs= require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a= Number(input[0]);
let b= Number(input[1]);
let c= Number(input[2]);

if(a -b > 0 && a-c > 0){
    if(b-c>0){
        console.log(b)
    }else{
        console.log(c)
    }
}
if(b-a>0 && b-c>0){
    if(a>c){
        console.log(a)
    }else{
        console.log(c)
    }
}
if(c>a && c>b){
    if(a>b){
        console.log(a)
    }else{
        console.log(b)
    }
}