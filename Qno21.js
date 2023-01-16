const prompt=require('prompt-sync')();
console.log('Enter the limit')
let limit=prompt('')
let arr=[]
let result=[]
console.log('Enter the values of array')
for(let i=0;i<limit;i++){
    arr[i]=Number(prompt(`values of array[${i+1}]`))
}
for(i=0;i<limit-1;i++){
    let res=arr[i]*arr[i+1]
    result.push(res)
    
}
console.log(arr)
console.log('Result after multiplying adjacent values ')
console.log(result)