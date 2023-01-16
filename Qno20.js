const prompt=require('prompt-sync')();
console.log('Enter the limit')
let limit=parseInt(prompt(''))
let str="";
let k=1;

for(let i=1;i<=limit;i++){
    for(let j=1;j<=i;j++){
        str+= (k++) +" "
    }
    str+=('\n')
}
console.log(str)