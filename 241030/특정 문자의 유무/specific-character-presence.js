const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let result1="No";
let result2="No";
for(let i = 0; i < input.length; i++){
    if(input.slice(i,i+2) ==="ee"){
        result1="Yes"
    }
    if(input.slice(i,i+2) === "ab"){
        result2="Yes"
    }
}
console.log(result1,result2)