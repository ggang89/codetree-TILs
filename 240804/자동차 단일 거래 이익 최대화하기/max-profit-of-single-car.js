const fs=require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n");
let n=Number(input[0])
let price = input[1].split(" ").map(Number);
//이익을 최대화하려면 가장 쌀 때 자동차를 사야한다.

let maxProfit =0;
for(let i = 0; i < n; i++){//
    for(let j = i + 1; j < n; j++){
        let profit =price[j]-price[i];
                    //판 가격-산 가격
        if(profit > maxProfit) maxProfit =profit
    }
}

console.log(maxProfit)