const prompt=require('prompt-sync')();

let str=prompt('Enter a string: ')
let flag=0;
const len=str.length;
for(let i=0;i<len;i++){
    if(str[i]!==str[len-i-1]){
        flag=1;
        // console.log('The string is not palindrome')
    }
}
if(flag==1){
    console.log(`The string ' ${str}'  is not a palindrome`)
}else{
    console.log(`The string' ${str} 'is palindrome`)
}
