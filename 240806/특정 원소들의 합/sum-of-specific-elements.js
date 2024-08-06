const fs= require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let arr4d=[]
for(let i=0; i<4 ;i++){
     arr4d.push(input[i].split(" ").map(Number))
}
let str=0
for(let i = 0; i < 4; i++){
    for( j = 0; j <= i; j++){
        str += arr4d[i][j]
    }
}
console.log(str)
//a[0,0]
//a[1,0],a[1,1]
//a[2,0],a[2,1],a[2,2]
//a[3,0],a[3,1],a[3,2],a[3,3]