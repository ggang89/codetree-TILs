const fs= require("fs")

let input =fs.readFileSync(0).toString().trim();

let nextStrNumber=input.charCodeAt(0)+1;

let result=String.fromCharCode(nextStrNumber);

if(input ==='z'){
   result=String.fromCharCode('a'.charCodeAt(0))
};
console.log(result)