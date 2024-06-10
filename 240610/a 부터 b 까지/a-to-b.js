const fs=require("fs");

let input =fs.readFileSync(0).toString().split(" ");

let a=Number(input[0]);
let b=Number(input[1]);


let result = "";
while (a <= b) {
    result += a + " ";
    if (a % 2 === 1) {
        a *= 2;
    }
    else {
        a += 3;
    }
}

console.log(result);