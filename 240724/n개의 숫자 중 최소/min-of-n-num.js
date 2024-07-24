const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split("\n")
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number)

let min=arr[0]
let cnt=1;
for(const a of arr){
    if(min > a){//지금까지 나왔던 값들 보다 더 작은 값이면
         min = a; // 그 값을 최소값으로 갱신하고
        cnt = 1; //cnt는 1롤 초기화한다
    }else if(min === a){ //지금까지 나온 값과 같다면
        cnt++; //cnt을 1 증가시킨다.
    }
    
}console.log(min,cnt)