const fs= require("fs");

let input= fs.readFileSync(0).toString();
let a = Number(input[0]);
let b = Number(input[1]);

let satisfiled = false;

for(let i =a; i<= b;i++){
    if( 1920 % i === 0 ||  2880 % i=== 0){
        satisfiled = true;
    }
};
if(satisfiled === true){
    console.log(1);
}else{
    console.log(0);
}