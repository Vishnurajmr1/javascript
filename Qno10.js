// Program to swap between two array
const prompt=require('prompt-sync')();


let  Array1 = [];
let Array2=[];
let temp=0;
let  limit = prompt('Enter the size of array'); //Maximum Array size
console.log('Enter the values of Array1')

for(let i=0; i<limit;i++) {
	Array1[i] = prompt('');
}

//Taking values to second array
console.log('Enter the values of Array2')

for(i=0; i<limit;i++) {
	Array2[i] = prompt('');
}
//Swapping of array
	temp=Array1;
	Array1=Array2;
	Array2=temp;
console.log('Arrays after swapping:')
console.log('Array1 : '+Array1)
console.log('Array2 : '+Array2)

