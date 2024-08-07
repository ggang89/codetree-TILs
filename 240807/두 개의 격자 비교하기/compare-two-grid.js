const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [a,...r]=input
//console.log(a)
let num=a.split(" ").map(Number)
let [n,m]=num
//console.log(n,m,r)
let arr1 = Array(n).fill().map(()=>Array(m).fill(0))
let arr2 = Array(n).fill().map(()=>Array(m).fill(0))

for(let i = 0; i < n; i++){
    arr1[i] = r[i].split(" ").map(Number)
}
for(let i = 0; i < n; i++){
    arr2[i] = r[i+4].split(" ").map(Number)
}
//console.log(arr1,arr2)
let arr3=Array(n).fill(0).map(()=>Array(n).fill(0))
for(let i = 0; i < n; i++){
    for(let j = 0; j < n ; j++){
          if(arr1[i][j] == arr2[i][j]){
           arr3[i][j] =0
          } 
          else arr3[i][j] =1
         
     }
  } //console.log(arr3)

  console.log(arr3[0].join(" "))
  console.log(arr3[1].join(" "))
  console.log(arr3[2].join(" "))
  console.log(arr3[3].join(" "))