const fs=require("fs");

let [, tempArrString, ...rest] = fs.readFileSync(0).toString().split("\n");
const arr = tempArrString.split(" ").map(Number);

for(const r of rest){
  if(r[0] === "1"){
    const [, index] = r.split(" ").map(Number);
    console.log(arr[index-1]);
  } else if(r[0] === "2"){
    const [, target] = r.split(" ").map(Number);
    const value = arr.findIndex(v => v === target);
    console.log(value+1);
  } else {
    const [, s, e] = r.split(" ").map(Number);
    console.log(arr.slice(s-1, e).join(" "))
  }
}