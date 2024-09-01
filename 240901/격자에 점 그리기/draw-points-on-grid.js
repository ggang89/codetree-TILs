const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [nm,...rest] = input;
let [n,m]=nm.split(" ").map(Number); 
//console.log(n,m,r)//2 3 [ '1 1', '1 2', '2 2' ]
let arr = Array(n+1).fill(0).map(()=>Array(n+1).fill(0));
// let r = Number(rest[0].split(" ")[0])
// console.log(r)
for(let i = 1; i <= m; i++){
    let [r,c] = rest[i-1].split(" ").map(Number);
    arr[r][c]= i
   
}
 
 for(let i = 1; i <= n; i++){
    let str ="";
    for(let j = 1; j <= n; j++){
        str += arr[i][j]+" ";
    }
    console.log(str)
 }