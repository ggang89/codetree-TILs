const fs =require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let c = input[0];
let n = Number(input[1]);
let result="";
if(c === "A"){
    for(i = 1; i <= n; i++){
        result +=i+" ";

    } 
    console.log(result);
}
 else if(c === "D"){
    for(i = n; i =1; i--){
        result +=n;
    }
    console.log(result);
}