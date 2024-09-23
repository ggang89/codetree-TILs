const fs=require("fs");
let input= fs.readFileSync(0).toString().trim().split("\n");
//console.log(input)
let [a,b,c] =input;
let aNum = a.length;
let bNum = b.length;
let cNum = c.length;
let str=[]
for(let i=0; i < 3; i++){
    str.push(input[i].length);
}
let crr=str.sort((a,b)=>a-b);
let result=crr[2]-crr[0]
    console.log(result)