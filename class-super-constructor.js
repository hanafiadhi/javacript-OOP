class Employee {
    constructor(firstName){
        this.firstName = firstName
    }
    sayHello(name){
        console.log(`Hello ${name} my name is Employee ${this.firstName}`)
    }
}

class Manager extends Employee{
    constructor(firstName,lastName){
        super(firstName)
        this.lastName =lastName
    }
    sayHello(name){
        console.log(`Hello ${name} my name is Manager ${this.firstName} ${this.lastName}`)
    }
}

let employe = new Employee("Budi")
employe.sayHello("Hanafi")

let Managers = new Manager("Rudi","Abadi")
Managers.sayHello("Hanafi")