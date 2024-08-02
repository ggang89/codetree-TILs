const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number);
let result="";

while(true){
    let maxIndex=0
for(let i = 0; i < n; i++){
    if(arr[i] > arr[maxIndex]){
         maxIndex = i;
        
        }
}
        result +=`${maxIndex+1} `;
        if(maxIndex ===0) break;
        
        n=maxIndex;
}
console.log(result)