const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim());

let arr=[];
arr[0]=1;
arr[1]=n
//console.log(arr)  => [1,5]

for(let i = 2; i <= 100; i++) {
    arr[i] = arr[i-1] + arr[i - 2];
}

let result =""
for(let i=0; i< arr.length; i++){
    result += arr[i]+" ";
    if(arr[i] >100) break;
}
console.log(result)