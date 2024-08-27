const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr = Array(n).fill(0).map(()=>Array(n).fill(0));

for(let i = 0; i < n; i++){
    arr[i][0] = 1;
    arr[i][i] = 1;
}

for(let i = 0; i < n; i++){
    for(let j = 1; j < i; j++){
        arr[i][j] = arr[i-1][j-1] + arr[i -1][j];
    }
}

//출력
for(let i = 0; i < n; i++){
    let str="";
    for(let j = 0; j <= i; j++){
        str +=arr[i][j] + " ";
    }
    console.log(str);
}