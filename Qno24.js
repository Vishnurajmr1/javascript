const prompt=require('prompt-sync')();


class Area{
    circle(){
        const pi=3.14
        // console.log('Enter the radius')
        let rad=parseFloat(prompt('Enter the radius: '))
        console.log(`${`The area of circle for radius : ${rad}cm  is ` + (rad * rad * pi)}cm2`);

    }
    square(){
        let len=parseInt(prompt('Enter the length: '))
        console.log(`Area of square is:${len * len}sq.cm`)
    }
    rectangle(){
        let len=parseInt(prompt('Enter the length: '))
        let bre=parseInt(prompt('Enter the breadth: '))
        console.log(`Area of rectangle is: ${len * bre}sq.cm`)
    }
    triangle(){
        const half=0.5
        let base_len=parseFloat(prompt('Enter the base length: '))
        let height=parseFloat(prompt('Enter the height: '))
        console.log(`Area of triangle is :${base_len * height * half}cm`);
    }

}
class MyClass extends Area{
    main(){
        console.log('1.circle\n2.square\n3.rectangle\n4.triangle\nEnter your choice')
        let choice=Number(prompt(''))
        let area=new Area()
        switch(choice){
            case 1:
                area.circle()
                break;
            case 2:
                area.square()
                break;
            case 3:
                 area.rectangle()
                break;
            case 4:
                area.triangle()
                break;
            default:
                console.log('Invalid Entry')
        }
    }
    
}
const myclass=new MyClass()
myclass.main()
myclass.main()