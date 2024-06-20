const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");
let index = 0;

while(true){
    let studentNumber=Number(input[index]);
    index++;
    if(studentNumber === 1){
        console.log("John");
    }else if(studentNumber === 2){
        console.log("Tom");
    }else if(studentNumber ===3){
        console.log("Paul");
    }else if(studentNumber === 4){
        console.log("Sam");
    }else if(studentNumber > 4){
        console.log("Vacancy");
        break;
    }

}