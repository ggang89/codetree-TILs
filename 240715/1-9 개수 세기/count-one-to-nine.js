const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 원소 수 n과 배열 입력받기
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// arr[i]를 입력받은 후 카운팅 배열을 통해 각각의 빈도 저장
let countArr = Array(10).fill(0);
for (let i = 0; i < n; i++) {
    countArr[arr[i]]++;
}

// 1부터 9까지 나온 횟수를 출력
for (let i = 1; i <= 9; i++) {
    console.log(countArr[i]);
}