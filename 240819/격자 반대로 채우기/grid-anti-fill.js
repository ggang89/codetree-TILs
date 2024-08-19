const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim());

let arr2d=Array(n).fill().map(()=>Array(n).fill(0));
let cnt=1;
for(let j = n-1; j >= 0; j--){
    if(j % 2 !==0){ //홀수
    for(let i = n-1; i >= 0; i--){
            arr2d[i][j] =cnt;
            cnt++;
        }
    }
    else{//짝수
        for(let i = 0; i < n; i++){
            arr2d[i][j]=cnt;
            cnt++

        }
    }
}

let str="";
for(let arr of arr2d){
    str =""
    for(let a of arr){
        str += a+" "
    }
    console.log(str)
}