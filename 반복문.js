 # 8393번 : 합

//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 자연수 N (최대값 10000)
// 단순히 더해도 시간 복잡도가 0(N)이다. 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 문자열을 수로 변환할 때, parseInt에 비하여 Number의 속도가 더 빠르게 동작한다. (단순 정수의 경우 특히나 더) 소숫점 나눠서 몫만 취할땐 parseInt
let n = Number(input[0]);
let sum = 0;

for(let i = 1; i<=n; i++){
    sum += i;
}

console.log(sum)

// 또는 등차수열의 합 공식을 사용할 경우

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

console.log(n*(n+1)/2) // 이런 간단한 식으로 해결 가능하기 때문에 상수 시간이다(..)

# 2739번 : 구구단 


// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = Number(input[0]);


for(let i =1; i<=9; i++){ //js는 for문 안에 ;를 치자...
    // 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함 (백틱 문자 사용)
    console.log(`${n} * ${i} = ${n*i}`);
}


# 2438번 별찍기 1

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 중첩 반복문(이중 for문)

let n = Number(input[0]);

let result = "";
for(let i=0; i < n; i++){ //총 행만큼 반복
    for(let j = 0; j <= i; j++){ // 현재 행만큼 별을 출력
        result += "*";
    }
    
    result += "\n"
}

console.log(result);

 # 15552번 빠른 계산 A+B 


// js를 이용해 문자열을 출력할 때, 정보량이 많은 경우 일일히 console.log를 사용시 시간 초과
// 모든 줄에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력할 것


// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때, parseInt에 비하여 Number의 속도가 더 빠르게 동작

let testCase = Number(input[0]); // 한 줄씩 테스트 케이스를 확인해서 읽음
let answer = ''; // 출력을 위한 변수 

// 백만줄까지 가능
// 시간 제한 1초안에 가능하도록 한번에 출력 

for(let t = 1; t<= testCase; t++){
    let data = input[t].split(' '); 
    let a = Number(data[0]);
    let b = Number(data[1]);
    answer += a + b + '\n';
}

console.log(answer);


//
