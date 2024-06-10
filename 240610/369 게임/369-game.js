const fs=require("fs");

let n =Number(fs.readFileSync(0).toString());
let result="";
for(i = 1 ; i <= n ; i++){
    if(i % 3 === 0){
        result +=0+" ";
    }else{
        result +=i+" ";
    }
}
console.log(result);