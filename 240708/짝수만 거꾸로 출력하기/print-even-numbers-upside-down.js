const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0])
//console.log(input) //[ '6', '3 1 4 5 6 2' ]
let arr=input[1].split(" ").map(Number);
//console.log(arr)
let result=[]

for(let i =0; i < n; i++){
     let x= arr[i]
    if(x % 2 === 0){

        result.push(x)
    }
   
}console.log(...result.reverse());