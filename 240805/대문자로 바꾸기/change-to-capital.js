const fs=require("fs")
let input=fs.readFileSync(0).toString().split("\n");

for(let i=0; i < input.length; i++){
    let str=""
    let arr=input[i].split(" ").map(a=>a.toUpperCase() )
    for(let j = 0; j < arr.length; j++){
        str +=arr[j]+" "
    }
    console.log(str)
}