const fs =require("fs");

let n =Number(fs.readFileSync(0).toString());



if (n >= 12 || n <= 2) {
    console.log("Winter");
}
else if (n <= 5) {
    console.log("Spring")
}
else if (n <= 8) {
    console.log("Summer");
}
else {
    console.log("Fall");
}