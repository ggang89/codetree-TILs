const fs=require("fs");

let n=Number(fs.readFileSync(0).toString());

let num=0;

//완전수 : 자기 자신을 제외한 약수의 합이 자신이 되는 수
//약수 : 어떤 수를 나머지 없이 나눌 수 있는 자연수
//n/i === 0 이면 i는 n의 약수이다.
// num 에 n의 약수를 더하고 그 값을 n과 비교한다

for(let i = 1; i < n; i++){
    if(n % i === 0){
        num += i;
    }
}
if(num === n){
    console.log("P");
}else{
    console.log("N");
}