'use strict'
const numver = process.argv[2]|| 0;
let sum = 0 ;
for (let i = 1; i <= numver; i++){
    sum = sum + i;
}

console.log(sum)