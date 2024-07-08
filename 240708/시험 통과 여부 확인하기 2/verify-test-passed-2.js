const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split("\n");
let studentNumber=Number(input[0]);

let passPeople = 0;

for(let i=1; i <=studentNumber; i++){
    let scores= input[i].split(" ").map(Number) 
    //console.log(result) //[ 85, 68, 89, 75 ]
    let sum=0;

    //4과목의 점수 합
    for(let j=0; j < 4; j++){
        sum +=scores[j];
    }
    //평균
    let avg = sum / 4;

    if(avg >=60){
        console.log("pass")
        passPeople++;
    }else{
        console.log("fail")
    }
    
}
console.log(passPeople)