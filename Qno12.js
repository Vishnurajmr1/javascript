const prompt=require('prompt-sync')();

let limit=prompt('Enter the limit');//maximum size of array
let arr=[];
let temp=0;

console.log('Enter the value of Array')
for(let i=0;i<limit;i++){
    arr[i]=prompt('')
}
for(i=0;i<limit;i++){
    for(let j=i+1;j<limit;j++){
        if(arr[i]<arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

        }
    }
}
console.log(`The sorted array is:${arr}`)