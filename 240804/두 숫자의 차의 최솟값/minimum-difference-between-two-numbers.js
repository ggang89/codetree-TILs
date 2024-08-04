const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n");
let n =Number(input[0])
let arr = input[1].split(" ").map(Number);
let minValue ;
let valueArr=[];
for(let i = 0;i < n-1; i++){
    let value= arr[i+1]-arr[i]
    valueArr.push(value)
}
//console.log(valueArr)
//console.log(minValue)
let min=valueArr[0]
for(const v of valueArr){
    if(v < min) min =v
}
console.log(min)