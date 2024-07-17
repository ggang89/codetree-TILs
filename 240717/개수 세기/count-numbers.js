const fs=require("fs")

let input =fs.readFileSync(0).toString().split("\n");//[ '10 3', '1 2 3 4 5 3 7 8 3 10' ]


let a = input[0].split(" ").map(Number);
let brr = input[1].split(" ").map(Number);
let n=a[0]
let m=a[1]
let cnt=0
for(const b of brr){
    if(b === m) cnt++
}

console.log(cnt)