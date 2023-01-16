const prompt=require('prompt-sync')();
console.log('Enter the height')
let userHeight=prompt()
try {
    if(isNaN(userHeight))
    throw"notANumberError"
    if(userHeight>=200)
    throw"HugeHeightError"
    if(userHeight<=40)
    throw"TinyHeightError"
    else
    console.log('valid')
} catch (error) {
     console.log(error)
    
}