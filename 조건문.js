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

// 2525번 오븐 시계

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(Number); // 코드 라인수를 짧게 치기 위해 map 사용, 배열 형태로 a,b로 바로 반환
let c = Number(input[1]);


let totalMin = a * 60 + b + c; // 분의 형태로 변환
totalMin %= 1440; // 하루를 초과하는 경우를 방지하기 위해 1440으로 나눔

let hour = parseInt(totalMin/60);
let minute = totalMin % 60;

console.log(hour + " " + minute);

// 2480번 주사위 세 개

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b,c] = input[0].split(' ').map(Number);

if(a==b && b== c){console.log( 10000 + a * 1000 );} // 세 개의 수가 모두 같은 경우
else if(a==b) {console.log( 1000 + a * 100 );} // 그 중 두 개의 수가 같은경우
else if(a==c) {console.log( 1000 + a * 100 );}
else if(b==c) {console.log( 1000 + b * 100 );}

// 세 개 수가 모두 다른 경우

else console.log(Math.max(a,b,c) * 100);

