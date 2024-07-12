const fs= require("fs");

let input = fs.readFileSync(0).toString().split(" ").map(Number);


let arr = [input[0],input[1]];
//console.log(arr)

for(let i = 2; i < 10; i++){
    arr[i]= arr[i-1]+ 2*arr[i-2];
}
let str=""
for(let i = 0; i < 10; i++){
    str +=arr[i]+" "

}
console.log(str)