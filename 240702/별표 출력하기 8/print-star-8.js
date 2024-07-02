const fs =require("fs")

let n =Number(fs.readFileSync(0).toString().trim())

let str = "";

for(let i = 0; i < n; i++){//0 1 2 3
    str=""
    if(i % 2 !== 0){
        for(let j = 0; j <i+1; j++){ //0 1   0 1 2 3
        str +="* "
        }
        
    }else{
        str ="*"
    }
    console.log(str)
}