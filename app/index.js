

class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person{
    constructor(name, phrase){
        //super is calling the class Person and giving it the name
        //if there're more properties in the Person constructor then we need to pass each of them in
        super(name);
        this.phrase = phrase;
    }

    sayPhrase(){
        return this.phrase;
    }

    sayBye(){
        return `My name is ${this.name}, good day!`;
    }

    sayHello(){
        return super.sayHi() + 'I\'m a super person now';
    }
}

const na = new SuperPerson('Na', 'Up up and up');

console.log('Na: ', na.sayHi());
console.log('Na: ', na.sayBye());
console.log('Na: ', na.sayPhrase());
console.log('Na: ', na.sayHello());