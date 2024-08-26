let arr2d = Array(5).fill(0).map(()=>Array(5).fill(0));

for(let j = 0; j < 5; j++){
    arr2d[0][j] = 1;
}
for(let i = 0; i < 5; i++){
    arr2d[i][0] = 1;
}
for(let i = 1; i < 5; i++){
    for(let j = 1; j < 5; j++){
        arr2d[i][j]=arr2d[i][j-1] + arr2d[i-1][j]
    }
}

for(let row of arr2d){
    let str="";
    for(let e of row){
        str += e +" ";
    }
    console.log(str)
}