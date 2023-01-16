const prompt=require('prompt-sync')();

function Car(Name,mileage,max_speed){
    this.Name=Name
    this.mileage=mileage
    this.max_speed=max_speed
}

let car=new Car()
car.Name=prompt('Enter the name of Car: ')
car.mileage=prompt('Enter the mileage of Car: ')
car.max_speed=prompt('Enter the max_speed of Car: ')

console.log(`The name of car is: ${car.Name}`);
console.log(`The mileage of car is: ${car.mileage}`)
console.log(`The maximum speed of car is:${car.max_speed}`);