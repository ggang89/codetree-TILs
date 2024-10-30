const fs= require("fs");

let input= fs.readFileSync(0).toString().trim();

let ee = 0;
let eb = 0;

for(let i = 0; i < input.length; i++){
    if(input.slice(i,i+2) === "ee"){
        ee++
    }
    if(input.slice(i,i+2) ==="eb"){
        eb++
    }
}
console.log(ee,eb)