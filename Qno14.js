const prompt=require('prompt-sync')();
let Array1=[]
let Array2=[]
let sum=[]
let limit=prompt('Enter the limit')
console.log('Enter the values of array1')
for(let i=0;i<limit;i++){
    Array1[i]=[]
    for(let j=0;j<limit;j++){
        Array1[i][j]=prompt(`values to the index of array1 [${i}][${j}] : `)
    }
}
console.log('Enter the values of array2')
for(let i=0;i<limit;i++){
    Array2[i]=[];
    sum[i]=[];
    for(let j=0;j<limit;j++){
        Array2[i][j]=prompt(`values to the index of array2 [${i}][${j}] : `)
        sum[i][j]=Number(Array1[i][j])+Number(Array2[i][j])
    }
}
// console.log(Array1)
// console.log(Array2)
console.log(`Sum of 2 Array is:[${sum}]`)