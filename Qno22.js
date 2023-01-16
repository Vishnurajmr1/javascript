const prompt=require('prompt-sync')();
//Array size and declarition of arrays
console.log('Enter the size of  Array')
let limit=prompt('')
let arr1=[]
let arr2=[]
let add=[]
function Array(){
function getArray(){
  
    console.log('Enter the values of Array1')
    for(let i=0;i<limit;i++){
       arr1[i]=[]
        for(let j=0;j<limit;j++){
            arr1[i][j]=Number(prompt(`values to the index of array1 [${i+1}][${j+1}] : `))
        }
    }
    console.log('Enter the values of Array2')
    for(i=0;i<limit;i++){
       arr2[i]=[]
        for(j=0;j<limit;j++){
            arr2[i][j]=Number(prompt(`values to the index of array2 [${i+1}][${j+1}] : `))
        }
    }
}
function sumArray(){
    for(i=0;i<limit;i++){
        add[i]=[]
        for(j=0;j<limit;j++){
            add[i][j]=Number(arr1[i][j]+arr2[i][j])
        }
    }
    // return sum[i][j];
}
function displayArray(){
    let res=add
    console.log(`sum of Array1 and Array2 is:`);
    console.log(`[${res}]`)
}
getArray()
sumArray()
displayArray()
}
Array()