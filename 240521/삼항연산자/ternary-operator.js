const fs=require("fs");

let score=fs.readFileSync(0).toString().trim();
let result=score=100?"pass":"failure";
console.log(result);