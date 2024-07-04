const fs= require("fs")
let n= Number(fs.readFileSync(0).toString().trim())
let count = 1;
const arr = [];
for(let i=1; i <= n; i++){ //  1 2 3 
    if(i % 2 === 0){
        arr.push("* ".repeat(count));
        count += 1;
    } else {
        arr.push("* ".repeat(n-count+1))
    }
}
for(let s of arr){
    console.log(s);
}
arr.reverse();
for(let s of arr){
    console.log(s);
}