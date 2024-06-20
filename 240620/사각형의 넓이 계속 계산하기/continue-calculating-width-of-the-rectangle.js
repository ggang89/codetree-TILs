const fs=require("fs");

let input = fs.readFileSync(0).toString().split("\n");//['4 8 z' ,'3 6 d','5 10 c']

let index=0;

while(true){
    
        let square = input[index].split(" "); 
        let result=Number(square[0])*Number(square[1]);
        let c=square[2];
        index++;
        console.log(result);
    if(c==="C"){
        break;
    }
}