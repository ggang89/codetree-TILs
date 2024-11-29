const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
 let result="";
 let num
for(let i = 0; i <input.length; i++){
         result += input[i];
         
    if(input[i]==='e') {
     num = i   
        break;
    }

}
console.log(result.slice(0,num)+input.slice(num+1))