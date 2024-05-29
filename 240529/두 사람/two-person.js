const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");//[ '20 M', '20 W' ]

//console.log(input);
let correct = 0;
for(let i =0; i<input.length; i++){
    //console.log(input[i]);
    let s=input[i].split(" ");
    //console.log(s);
    let s_year=Number(s[0]);
    let s_gender=s[1];
    if(s_year>=19 && s_gender === 'M'){
        correct = 1;
        break;
    }
}

console.log(correct);