const fs = require("fs")
let input =fs.readFileSync(0).toString().split(" ").map(Number);
let [n,m]=input;
//console.log(n,m) // 4,2
let arr2d=Array(n).fill(0).map(()=>Array(m).fill(0));
let cnt = 0;
for(let i = 0; i < m; i++){
    if(i % 2 === 0){//짝수인 열에서는 순서대로 숫자가 1씩 증가
      for(let j = 0; j < n; j++){
        arr2d[j][i]=cnt;
        cnt++;
      }
    }else{ //홀수인 열에서는 1씩 작아짐
      for(let j = n-1; j >=0; j--){
        arr2d[j][i] =cnt;
        cnt++
      }
    }
}
for(let arr of arr2d){
  let str= ""
  for(a of arr){
    str += a +" "
  }
  console.log(str);
}