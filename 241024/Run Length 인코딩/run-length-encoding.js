const fs=require("fs");

let input =fs.readFileSync(0).toString().trim();

let currChar =input[0];
let numChar =1;

let ans="";

for(let i = 1; i <input.length; i++){
    let targetChar = input[i];
    if(targetChar === currChar){
        //처음 정함 문자열과 같으면 연속된 문자 갯수를 추가해준다.
        numChar++;
    }else{
        //지금까지의 문자와 다르면 새로운 문자로 바꿔준다.
        //1.먼저 지금가지 세어온 문자와 숫자를 기록해준다.
        ans +=currChar;
        ans +=numChar;
        //문자열을 현재의 새로운 문자로 초기화해주고, 숫자도 초기화해준다.
        currChar =targetChar;
        numChar = 1;
    }
}
ans +=currChar;
ans +=numChar;

console.log(ans.length);
console.log(ans);