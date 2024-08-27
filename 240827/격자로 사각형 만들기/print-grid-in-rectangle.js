const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let arr = Array(n).fill(0).map(()=>Array(n).fill(0));

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        arr[i][0] = 1;
        arr[0][j] = 1;
    }
}

for(let i = 1; i < n; i++){
    for(let j = 1; j <n; j++){
        arr[i][j]= arr[i-1][j-1]+ arr[i-1][j]+arr[i][j-1]
    }
}//console.log(arr)

for(let i of arr){
    let str="";
    for(let j of i){
        str +=j +" ";
    }
    console.log(str)
}