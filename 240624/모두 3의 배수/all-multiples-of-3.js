const fs=require("fs");

let input=fs.readFileSync(0).toString().trim();
let arr=input.split("\n");

let satisfied= true;

for(let i=0;i<5;i++){
    let n=Number(arr[i]);
    if( n % 3 !== 0){
        satisfied = false;
        break;
    }
}
if(satisfied === true){
    console.log(1)
}else{
    console.log(0)
};