const fs =require("fs")

let n =Number(fs.readFileSync(0).toString().trim())

let srt=""

for(let i = 0; i < n; i++){ //0 1 2 
    str=""
    for(let j = 1; j < n-i; j++){ //3-0(3) 3-1(2) 3-2(1)
        str +="  "
    }
    for(let k = 0; k < i+1; k++){ //1 2 3
        str +="@ "
    }
    console.log(str)
}
for(let i=0; i < n-1;i++){ // 0 1
    str=""
    for(let j=0 ; j <=1-i; j++){//1 0
        str +="@ "
    }
    console.log(str)
}