const fs=require("fs")

let input=fs.readFileSync(0).toString().trim().split(" ").map(Number);
//console.log(input)
let sumEven = 0
let sumOdd = 0

for(let i = 0; i < input.length; i++){
    if((i+1) % 2 === 0){ //짝수번째 수
   sumEven +=input[i]

    }
    else{
        sumOdd +=input[i]
    }
}
// console.log(sumEven)
// console.log(sumOdd)
if(sumEven >sumOdd){
    console.log(sumEven-sumOdd)
}else{
    console.log(sumOdd-sumEven)
}