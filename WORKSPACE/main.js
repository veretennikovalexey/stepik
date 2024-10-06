"use strict";
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(0.1 + 0.2);

let num = 24.3456;
console.log(num); // 24.3456
num = num.toFixed(5); // 24.34560
console.log(num);
console.log(10 + num); // 1024.34560
num = 10 + +num;
console.log(num); // 34.345600000000005
num = num * 100;
num = Math.round(num, 2);
num = num / 100;
console.log(num); // 34.35
