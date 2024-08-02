const fs= require("fs");
let input=fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number);//1 2 1
//3231
let max= -1;

for(let a of arr){
    if(max < a){
        let cnt=0;
        for(let a2 of arr){
            if(a2===a){
                cnt +=1;
            }
        }
        if(cnt === 1){
            max=a
        }
    }
}
console.log(max)