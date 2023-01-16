const prompt=require('prompt-sync')();
console.log('Enter the marks scored by the student')
let wrt_tst=parseFloat(prompt('Written test = '))
let lab_tst=parseFloat(prompt('Lab exam = '))
let Assign=parseFloat(prompt('Assignments = '))
let avg=parseFloat((wrt_tst*70)/100+(lab_tst*20)/100+(Assign*10)/100)
console.log('Grade of the student is '+avg)