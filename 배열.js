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


