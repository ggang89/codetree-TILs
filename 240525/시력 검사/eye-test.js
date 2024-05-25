const fs = require("fs");

let eyes=fs.readFileSync(0).toString().split("\n");

let eye1=Number(eyes[0]);
let eye2=Number(eyes[1]);

if(eye1>=1.0 && eye2>=1.0){
    console.log("High");
}else if(eye1 >= 0.5 && eye2>=0.5){
    console.log("Middle");
}else{
    console.log("Low");
}