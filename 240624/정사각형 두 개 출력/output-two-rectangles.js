const fs=require("fs");

let n =Number(fs.readFileSync(0).toString().trim());

let str="";

for(let k=1;k<=2;k++){
    str=" ";
    for(let i =1; i<=n; i++){
    str="";
    for(let j =1; j<=n; j++){
        str +="*"
    }
    console.log(str)
    }
   console.log(" ");
   
}