const fs=require("fs");

let input=fs.readFileSync(0).toString();

let satisfied= true;

for(let i=0;i<5;i++){
    let n=Number(input[i]);
    if( n % 3 !== 0){
        satisfied = false;
    }
}
if(satisfied === true){
    console.log(1)
}else{
    console.log(0)
};