const prompt=require('prompt-sync')();

function main(){
    let limit=prompt('Enter the limit of array size')
    let Array=[]
    getArray(Array,limit)
    displayArray(Array,limit)
}
 function getArray(arr,size){
    console.log('Enter the values to Array')
    for(let i=0;i<size;i++){
        arr[i]=prompt('')
    }
 }
 function displayArray(arr){
    console.log(`The values of Array is: [${arr}]`)   
 }
 main()