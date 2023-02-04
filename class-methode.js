class Person {

    constructor(name){
        this.name = name
    }
    
    sayHello(name){
        console.log(`Hello ${name}`)
    }
}

const orang = new Person("Hanafi")
console.info(orang.name)