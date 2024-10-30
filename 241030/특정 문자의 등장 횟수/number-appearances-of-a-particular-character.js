const fs= require("fs");

let input= fs.readFileSync(0).toString().trim();

let ee = 0;
let eb = 0;

if(input.indexOf("ee") !== -1){
    ee++;
}
if(input.indexOf("eb") !== -1){
    eb++;
}
console.log(ee,eb)