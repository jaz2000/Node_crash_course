// const person={
//     name : 'John Doe',
//     age : 30
// }

// module.exports=person;

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        'My name is ${this.name} and I am ${this.age} years old';
    }
}

module.exports=Person;