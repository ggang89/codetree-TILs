const fs=require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let arr2d=[];

for(let i =0; i<2; i++){
    arr2d.push(input[i].split(" ").map(Number))
}
//console.log(arr2d)  //[ [ 10, 20, 30, 40 ], [ 50, 60, 70, 80 ] ]

//가로 평균
let str="";
for(let i = 0; i<2;i++){
    let sum = 0;
    for(let j = 0; j < 4; j++){
        sum +=arr2d[i][j];
    }
    str +=(sum /4).toFixed(1)+" ";
}
console.log(str)

//세로 평균
str ="";
for(let j = 0; j < 4; j++){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += arr2d[i][j]
    }
    str +=(sum/2).toFixed(1)+" ";
}
console.log(str);

//전체 평균
let sum = 0;
for(let i = 0; i < 2;i++){
    for(let j = 0; j < 4;j++){
        sum +=arr2d[i][j]
    }
}
console.log((sum/8).toFixed(1));