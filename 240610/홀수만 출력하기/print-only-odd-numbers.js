const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");

let n =Number(input[0]);

// let arr="";

// for(i=1;i<=n;i++){
//     arr +=input[i]+" ";
// }

// console.log(arr);//2 7 3 9 4

for(i=1; i <=n; i++){
    if(input[i] % 2 === 1 && input[i] % 3 ===0){
        console.log(input[i]);
    }
}