/*let givenArr = [1, 3, 2, 5, 4, 6, 8, 1, 10];

# 짝수만 추출합니다.
let evenArr = [];
for (let elem of givenArr) {
    if (elem % 2 === 0) evenArr.push(elem);
}

# 짝수로만 이루어진 리스트
console.log(evenArr);

>> [2, 4, 6, 8, 10] */

//2번째 숫자부터 끝까지의 합 구하기
/*let arr = [1, 2, 2, 5];

let sumVal = 0;
for (let elem of arr.slice(1)) sumVal += elem;

console.log(sumVal);

>> 9
*/

const fs=require("fs")
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);//배열의 요소를 숫자로 만들어줌
let sum=0
let cnt=0


// 10개의 정수 중 250 이상의 수가 나올 때 까지의 수의 합계와 개수를 구합니다.
for (let elem of input) {
    if (elem >= 250) break;
    sum += elem;
    cnt++;
}

// 평균을 구합니다.
let avg = (sum / cnt).toFixed(1);

// 출력
console.log(sum, avg);