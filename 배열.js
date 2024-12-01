// 10818번 최소, 최대문제

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 배열의 원소를 하나씩 확인하여 최댓값과 최솟값을 찾는 문제
// 최댓값 (max value)과 최솟값(min value) 정보를 업데이트 한다
// 원소를 하나씩 확인하므로 시간복잡도 O(N)이다


let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

/* 
모든 정수는 -1,000,000보다 크거나 같고
1,000,000보다 작거나 같은 정수이다.
*/

let minValue = 10000001; // 가장 큰 수로 초기화
let maxValue = -10000001; // 가장 작은 수로 초기화

for(let i =0; i<n; i++){
    
    if(minValue > arr[i]) minValue = arr[i];
    if(maxValue < arr[i]) maxValue = arr[i];
    
}

console.log(minValue,maxValue);

/* reduce로 해결하는법 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));

let minValue = data.reduce((a,b) => Math.min(a,b));
let maxValue = data.reduce((a,b) => Math.max(a,b));

console.log(minValue + " "+maxValue);



// 2562번 최댓값 문제 

let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
// readline 모듈 말고 fs를 이용해 파일 전체를 읽어 들여 처리


// 배열을 하나씩 확인하여 최댓값과 인덱스를 찾아야함
// 계속해서 가장 큰 값을 가지는 인덱스를 업데이트

let maxIndex = 0;
let maxValue = 0;

for(let i =0; i<9; i++){ // 모든 데이터를 하나씩 확인
   let data = Number(input[i]);
    if(maxValue < data){
        maxValue = data;
        maxIndex = i;       
    }
}

console.log(maxValue);
console.log(maxIndex +1);


// 함수를 이용한 풀이
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let data = input.map(x=>Number(x));
let max = Math.max(...data)

console.log(max)
console.log(input.indexOf(max)+1);


// 3052번 나머지 문제

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 각 원소를 하나씩 확인하며 42로 나눈 나머지를 출력한다
// 원소를 하나씩 확인한다는 점에서 시간 복잡도 O 는 N이다.

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

for (let i = 0; i<10; i++){
    mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);



