const fs = require("fs");

let n =Number(fs.readFileSync(0).toString());

let x = false;

for(i =2; i <=(n-1); i++){
    if(n % i === 0){
        x =true;
       
    };
}
if(x=true){
    console.log("C");
}else{
    console.log("N");
}