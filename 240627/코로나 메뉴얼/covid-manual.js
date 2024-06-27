const fs=require("fs");

let input =fs.readFileSync(0).toString().split("\n");

let p1=input[0]; //y 38
let p2=input[1]; //n 36
let p3=input[2]; //y 40
let cnt=0;
for(let i =0; i<input.length; i++){
    //console.log(input[i])
    let p=input[i].split(" ");
    let s=p[0];
    let ondo=Number(p[1]);
    
    if(s ==="Y" && ondo >=37){
        cnt++;
    }
    
    
}
if(cnt >=2){
        console.log("E")
    }else{
        console.log("N")
    }