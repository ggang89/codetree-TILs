const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let beforeCodeNumber = input.charCodeAt(0)-1;

//String.fromCharCode(input)-1;

let result=String.fromCharCode(beforeCodeNumber);

if(input === 'a'){
    console.log('z')
}else{
    console.log(result)
}