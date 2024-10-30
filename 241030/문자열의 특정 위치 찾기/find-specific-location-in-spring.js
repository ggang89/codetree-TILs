const fs =require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let [str, s]=input;

let result = "No"

if(str.indexOf(s) !== -1){
    result = str.indexOf(s)
}
console.log(result)