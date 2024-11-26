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

// 2884번 알람 시계

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if(minute<45){ // 45분 미만일시
    hour -= 1;
    minute += 15;
    if(hour<0) hour = 23;
}
else minute -= 45;

console.log(hour+" "+minute);

// 
