// 2557번

console.log("Hello World!")

// 1000번 (A+B)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');

let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a+b);

// 1001번 (A-B)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a-b);


// 10998번 (AxB)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a*b);

// 1008번 (A/B)

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a/b);


// 10869번 사칙연산

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
