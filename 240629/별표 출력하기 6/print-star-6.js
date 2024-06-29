const fs=require("fs");

let n =Number(fs.readFileSync(0).toString().trim()); //4

let str="";

for(let i = 0; i < n; i++){ //0 1 2 3
    str="";
    for(let j = 0; j < i; j++){ 
    str +="  "
    }
    for(let k = 0; k < (2*n)-(2*i)-1; k++){
        str +="* "
    }
    console.log(str)
}
for(let i = 0; i < n-1; i++){
    str="";
    for(let j = 0; j <n-2-i;j++){
        str +="  ";
    }
    for(let k= 0; k <3+(2*i) ; k++ ){
        str +="* "
    }
    console.log(str)
}