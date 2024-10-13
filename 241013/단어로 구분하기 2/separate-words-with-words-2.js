const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

for(let i = 0; i < 10; i++){
    if(i % 2 !== 0) {
        continue};
    
        console.log(input[i])
}