const prompt=require('prompt-sync')();
let num1=parseInt(prompt('Enter 2 numbers'))
let num2=parseInt(prompt(''))

class MathOperations{
    addition(){
        console.log(`The  result of ${num1} + ${num2} is:  `+(num1+num2))
    }
    subtraction(){
        console.log(`The  result of  ${num1} - ${num2} is: `+(num1-num2))
    }
    multiplication(){
        console.log(`The  result of  ${num1} X ${num2} is: `+(num1*num2))
    }
    division(){
        console.log(`The  result of  ${num1} / ${num2} is: `+(num1/num2))
    }
}
const operations=new MathOperations
console.log('Enter your choice:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division')
let choice=Number(prompt(''))
switch(choice){
    case 1:
        operations.addition()
        break;
    case 2:
        operations.subtraction()
        break;
    case 3:
        operations.multiplication()
        break;
    case 4:
        operations.division()
        break;
    default:
        console.log('Invalid entry')
}