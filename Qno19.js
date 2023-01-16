const prompt=require('prompt-sync')();
console.log('Enter the annual_income');
let amt=Number(prompt(''))
function Interest(){
if(amt <=2.5*(10**5)  ){                              
    console.log('No Tax')

}else if(amt > (2.5) * (10**5) ){

    console.log('Income tax amount= '+parseFloat((amt*5)/100).toFixed(2))

}else if(amt >= 5*(10**5) ){

    console.log('Income tax amount= '+parseFloat((amt*20)/100).toFixed(2)) 

}else if(amt >= (10) * (10**5) && amt<= (50) * (10**5) ){

    console.log('Income tax amount= '+parseFloat((amt*30)/100).toFixed(2))
}else if(amt > (50) * (10**5) ){

    console.log('Income tax amount= Not calculated')
}
}
Interest()