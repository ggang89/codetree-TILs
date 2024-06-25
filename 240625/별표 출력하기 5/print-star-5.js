const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

for (let i = n; i >= 1; i--) {
    str = "";
    for (let j = 1; j <= i; j++) {
        // k는 *묶음을 출력해주는 역할을 합니다.
        // *묶음은 항상 i개의 *로 이루어져 있습니다.
        for (let k = 1; k <= i; k++) {
            str += "*";
        }
        // *묶음을 만든 이후에는 꼭 공백을 띄워줘야 합니다.
        str += " ";
    }
    // 행마다 한 줄씩 띄워줍니다.
    console.log(str);
}