//자연수 y를 입력받아 y년이 윤년인지를 판단하는 프로그램을 작성해보세요. 윤년일 조건은 다음과 같습니다.
//4로 나누어 떨어지는 해는 윤년, 그 밖의 해는 평년입니다.
//단, 예외적으로 100으로 나누어 떨어지되 400으로 나누어 떨어지지 않는 해는 평년으로 합니다.

const fs=require("fs");

let y=Number(fs.readFileSync(0).toString().trim());


if(y % 4 ===0 ){
   if(y % 100 === 0){
    if(y % 400 === 0){
        console.log("true");
    }
    else{
        console.log("false");
    }
   }else{
    console.log("true");
   }
}else{
    console.log("false");
}