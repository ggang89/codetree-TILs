const fs =require("fs");
let input = fs.readFileSync(0).toString().split("\n");
//console.log(input)
let arr1=Array(3).fill(0).map(()=>Array(3).fill(0));
let arr2=Array(3).fill(0).map(()=>Array(3).fill(0));

for(let i = 0; i < 3; i ++){
    arr1[i] = input[i].split(" ").map(Number)
}//console.log(arr1)
for(let i = 0; i < 3; i++){
    arr2[i] =input[i+4].split(" ").map(Number)
}//console.log(arr2)

let arr3=Array(3).fill(0).map(()=>Array(3).fill(0));
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3;j++){
        arr3[i][j] = arr1[i][j]*arr2[i][j];
    }
}
//출력
for(let arr of arr3){
    let str="";
    for(let a of arr){
        str += a + " ";
    }
    console.log(str)
}