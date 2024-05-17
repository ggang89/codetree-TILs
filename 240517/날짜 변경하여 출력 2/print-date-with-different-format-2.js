const fs=require("fs");

let time=fs.readFileSync(0).toString().split("-");

console.log(time[2]+"."+time[0]+"."+time[1]);