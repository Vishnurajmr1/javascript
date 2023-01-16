const prompt=require('prompt-sync')();
let num=prompt('Enter a number')
let flag=0;

for(i=2;i<num/2;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}

if(flag==1){
    console.log('Entered number is not Prime number')
}else{
    console.log('Entered number is Prime number')
}