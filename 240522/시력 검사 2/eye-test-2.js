const fs =require("fs");

let eyes = Number(fs.readFileSync(0).toString());

if(eyes>=1.0){
    console.log("High")
}else if(eyes>=0.5){
    console.log("Middle")
}else{
    console.log("Low");
}