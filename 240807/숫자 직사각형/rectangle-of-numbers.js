const fs=require("fs")
let input= fs.readFileSync(0).toString().split(" ").map(Number);
let [n,m]=input; //4,3

let arr2d =Array(n).fill(0).map(()=>(Array(m).fill(0)))

let num=1;
for(let i =0; i <n ;i++){
    for(let j = 0; j < m; j++){
        arr2d[i][j] =num;
        num++;
    }
}

for(const arr of arr2d){
    let str="";
    for(const a of arr){
        str +=a+" "
    }
    console.log(str)
}