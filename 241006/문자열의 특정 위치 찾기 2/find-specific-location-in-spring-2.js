const fs=require("fs");
let input = fs.readFileSync(0).toString().trim(); //a
const arr=["apple", "banana", "grape", "blueberry", "orange"];
let cnt=0;

//3번째 4번째 =>index 2,3
for(let i=0; i<arr.length; i++){
    
        if(arr[i][2] ===input || arr[i][3]=== input){
            console.log(arr[i])
          cnt++
        
    } 
}
console.log( cnt)