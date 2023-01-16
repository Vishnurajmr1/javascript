const prompt=require('prompt-sync')();

console.log('Enter a string')
let my_string=String(prompt(''))
// console.log()
try{
    let reverse= my_string.split('').reverse('').join('')
    console.log(`The reverse string is: ${reverse}`)
}catch(error){
    console.error(`${my_string}.split is not a function`);
}finally{
    console.log(`Type of ${my_string} is: ${typeof my_string}`);
}