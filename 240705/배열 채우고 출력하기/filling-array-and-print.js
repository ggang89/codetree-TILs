const fs=require("fs")

let arr=fs.readFileSync(0).toString().split(" ");

let result =arr.reverse().join("");

console.log(result)