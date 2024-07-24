const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split("\n")
let n=Number(input[0]);
let arr=input[1].split(" ").map(Number)

let min=arr[0]
let cnt=0;
// 나머지 원소들을 보며 최솟값을 갱신합니다.
for (let i = 1; i < n; i++) {
    if (min > arr[i]) { // 지금까지 나왔던 값들 보다 더 작은 값이라면
        min = arr[i];  // 최솟값이 되므로 그 값을 갱신합니다.
    }
}

// min과 일치하는 원소의 개수를 셉니다.
for (let i = 0; i < n; i++) {
    if (arr[i] === min) {
        cnt++;
    }
}

// 출력
console.log(min, cnt);