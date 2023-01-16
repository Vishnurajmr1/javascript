const prompt=require('prompt-sync')();
let Array1=[]
let num=0;
let limit=prompt('Enter the limit'); //Maximum size of the array
console.log('Enter the value of Array')

for(i=0;i<limit;i++){
    Array1[i]=prompt('');
    if(Array1[i]%2==0){
        num=num+1;
    }
}
console.log('Number of even numbers in the given array is: '+num)

