const fs= require("fs");

let input= fs.readFileSync(0).toString().split(" ");

let a=Number(input[0]);
let b=Number(input[1]);

let result="";

if(a > 0){
    for(i=1; i <= b; i++){
        result +=a;
    }

}else{
    console.log(0);
}
console.log(result);