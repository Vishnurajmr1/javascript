const prompt=require('prompt-sync')();

class Main{
     main(){
    let limit=prompt('Enter the limit : ')
    let array=[]
    this.getArray(limit,array)
    // getArray(limit,array)
   this.displayArray(array)
}
getArray(limit,arr){
    console.log('Enter the values of Array :')
    for(let i=0;i<limit;i++){
         arr[i]=[]
         for(let j=0;j<limit;j++){
            arr[i][j]=Number(prompt(`values to the index of [${i+1}][${j+1}] : `))
         }
    }
    // console.log(arr);
    // return arr;
}
displayArray(arr){
    // let res=arr
    console.log(`The values of Array is:`)   
    console.log(arr)
}
}
const mn = new Main
mn.main()
