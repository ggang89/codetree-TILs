const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n")
//let nq=input[0] //3 3
let nrr =input[1].split(" ").map(Number) //[1 , 8, 5]

// 3n 3q
// nrr= 1 8 5
// 1 1(a) a번째 원소를 출력합니다  =>1
// 2 5(b) n개의 원소중 값이 b인 원소가 몇번째인지 출력 없으면 0 출력 => 3
// 3 1 2(s,e) 1번째 원소로부터 2번째 원소까지 값 출력  => 1 8

for(let i = 2; i < input.length; i++){//질문을 반복문 돌려서
 //질문의 첫번째요소의 숫자에 따라 조건문 작성
 let q = input[i].split(" ").map(Number);
 let qNumber = q[0];
 
 if(qNumber === 1){
  let a = Number(q[1])-1
  console.log(nrr[a])
 }
 
 
 if(qNumber === 2){
    let idx=0
    let b = Number(q[1]);
    for(const n of nrr){
        if(n === b){
            idx=(nrr.indexOf(n))+1
        }else{
           idx=0
        }
    }
    console.log(idx)
 }

 
 if(qNumber === 3){
   let s = Number(q[1])-1;
    let e = Number(q[2]);
    let result=nrr.splice(s,e);
    //console.log('result',result,s,e)  //[1,8]
    let a3=""
   for(let i=s;i <e; i++){
    a3 +=result[i]+" "
   }console.log(a3)
 }

}