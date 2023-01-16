const prompt=require('prompt-sync')();

console.log('Hello world')
let num=parseInt(prompt('Enter two numbers'));
let num1=parseFloat(prompt(''))
let sum=parseFloat(num+num1);
console.log('The sum of '+num+' and '+num1+' is: '+sum)