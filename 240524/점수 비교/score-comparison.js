const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");
//console.log(input);//[ '100 85', '98 78' ]
let a =input[0];//100 85
let b =input[1];//98 78
//console.log(a)
let aa=a.split(" ");//['100','85']
let bb=b.split(" ");
//console.log(aa);
let amath=Number(aa[0]);
let aEng=Number(aa[1]);

let bmath=Number(bb[0]);
let bEng=Number(bb[1]);

console.log(amath > bmath && aEng > bEng? 1:0);