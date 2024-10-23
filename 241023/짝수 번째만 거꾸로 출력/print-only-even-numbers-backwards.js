const fs=require("fs");
let input = fs.readFileSync(0).toString().trim();
let n =input.length-1;
//console.log(input)
let result=""
for(let i =n; i>0; i--){
    if(i % 2 ===0) continue;
    result +=input[i]
}
console.log(result)