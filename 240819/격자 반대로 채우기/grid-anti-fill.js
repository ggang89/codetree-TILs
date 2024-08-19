// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

// 격자를 채워줍니다.
let answer = Array(n).fill(0).map(() => Array(n).fill(0));
let count = 1;

for (let col = n - 1; col >= 0; col--) {
    if ((n - 1 - col) % 2 === 0) {
        // 이 케이스에는 아래에서 위로 값을 채워줍니다.
        for (let row = n - 1; row >= 0; row--) {
            answer[row][col] = count;
            count++;
        }
    }
    else {
        // 이 케이스에는 위에서 아래로 값을 채워줍니다.
        for (let row = 0; row < n; row++) {
            answer[row][col] = count;
            count++;
        }
    }
}

// 출력:
for (let row of answer) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}