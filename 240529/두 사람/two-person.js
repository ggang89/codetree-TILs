const fs=require("fs");

let input=fs.readFileSync(0).toString().split("\n");//[ '20 M', '20 W' ]

//console.log(input);

for(let i =0; i<input.length; i++){
    //console.log(input[i]);
    let s=input[i].split(" ");
    //console.log(s);
    let s_year=Number(s[0]);
    let s_gender=s[1];
    if(s_year>=19 && s_gender === 'M'){
        console.log(1);
        break;
    }
}