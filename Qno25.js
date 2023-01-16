const prompt=require('prompt-sync')();

let library=[
    {
        title:'Bill Gates',
        author:'The Road Ahead',
        readingstatus:true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingstatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingstatus: false
    }
]
console.log('The title of books are:')
for(let i=0;i<library.length;i++){
    let lib=library[i].title
    console.log(lib)
}

console.log('Enter the bookname');
let bookname=prompt('')


for( let i=0;i<library.length;i++){
    if(bookname == library[i].title.replace(/^[A-Z ]$/).toLowerCase() && library[i].readingstatus === true){
        console.log(`Already read  "${library[i].title}"  by  "${library[i].author}"`);
    }else if(bookname == library[i].title.replace(/^[A-Z ]$/).toLowerCase() && library[i].readingstatus === false){
        console.log(`You still need to read "${library[i].title}" by " ${library[i].author}"`);
    }
}
