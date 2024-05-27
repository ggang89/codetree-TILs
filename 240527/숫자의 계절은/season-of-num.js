const fs =require("fs");

let n =Number(fs.readFileSync(0).toString());

if(n >=3){
    console.log("Spring");
}else if(n>=6){
    console.log("Summer");
}else if(n>=9){
    console.log("Fall");
}else{
    console.log("Winter");
}