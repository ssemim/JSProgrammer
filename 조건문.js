//9498번 시험 성적 출력 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

score = Number(input[0]);

function rank (a) {
    
    if(a >=90 && a <=100) {console.log("A")}
    else  if(a >=80 && a <=89) {console.log("B")}
     else  if(a >=70 && a <=79) {console.log("C")}
      else  if(a >=60 && a <=69) {console.log("D")}
    else {console.log("F")}
}

rank(score);

//
