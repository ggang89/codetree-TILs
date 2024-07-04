const fs= require("fs")
let n= Number(fs.readFileSync(0).toString().trim())
let count = 1;

for(let i=1; i <= n; i++){ //  1 2 3 
    if(i % 2 === 0){
        console.log("* ".repeat(count));
        count += 1;
    } else {
        console.log("* ".repeat(n-count+1))
    }
}
for(let i=1; i<=n; i++){
    if(i % 2 === 0){
        console.log("* ".repeat(count));
    } else {
        console.log("* ".repeat(n-count+1));
        count -= 1;
    }
}