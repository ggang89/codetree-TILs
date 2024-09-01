const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [nm,...rest] = input;
let [n,m] =nm.split(" ").map(Number);
//console.log(n,m,rest)//3 3 [ '1 1', '3 2', '3 3' ]
let arr = Array(n+1).fill(0).map(()=>Array(n+1).fill(0));

for(let i = 1; i <= m; i++){
    let [r,c] = rest[i-1].split(" ").map(Number);
    arr[r][c] =r*c
}//console.log(arr)

for(let i =1 ;i <= n; i++){
    let str="";
    for(let j = 1; j <= n; j++){
        str +=arr[i][j] + " "
    }
    console.log(str)
}