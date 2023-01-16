const prompt=require('prompt-sync')();
function callback(myArray){
    let sum=0;
    myArray.forEach(element => {
        sum=sum+element
        
    });
    console.log(`The sum of array: ${sum}`)
    if(sum%2==0){
        return true;
    }else
    return false;
}
function myFilter(myArray,callback){
    if(callback(myArray)){
        console.log('The sum of array is even')
    }else 
    console.log('The sum of array is odd')
}
let myArray=[]
console.log('Enter the array limit')
let limit=Number(prompt())
console.log('Enter the array elements')
for(let i=0;i<limit;i++){
    myArray[i]=parseInt(prompt(`Values to index at [${i+1}]: `))
}
myFilter(myArray,callback)