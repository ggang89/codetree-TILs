const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n");
let n =Number(input[0])
let arr = input[1].split(" ").map(Number);
let minValue = arr[0];

for(let i = 0;i < n; i++){
    let value= arr[i+1]-arr[i]
    if(value < minValue) minValue = value
}
console.log(minValue)