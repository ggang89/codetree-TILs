const fs= require("fs");
let input=fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number);//1 2 1
//3231
let max=arr[0]
let cnt=0
for(let i = 0; i < n; i++){
    if(arr[i] > max){
         max = arr[i]
        cnt++;
    }else if(arr[i]===max){
        let arr2=arr.pop(arr[i]);
        for(let j=0;j<arr2.length;j++){
            if(arr2[j]>max) max=arr2[i]
        }
    }
    
}
console.log(max)