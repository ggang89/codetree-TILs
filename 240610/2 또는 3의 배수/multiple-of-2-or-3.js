const fs=require("fs");

let n=Number(fs.readFileSync(0).toString());

let result="";
for(i = 1; i <=n; i++){
    if(i % 2 === 0 || i % 3 === 0){
        //console.log(1);
        result = result + 1+" ";
    }else{
        //console.log(0);
        result = result + 0+" ";
    }
}
console.log(result);