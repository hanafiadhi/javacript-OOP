class Employee {
    sayHello(name){
        console.log(`Hello ${name} my name is Employee ${this.name}`)
    }
}

class Manager extends Employee{
    sayHello(name){
        console.log(`Hello ${name} my name is Manager ${this.name}`)
    }
}

let employe = new Employee()
employe.name = "Budi"
employe.sayHello("Hanafi")

let Managers = new Manager()
Managers.name = "Rudi"
Managers.sayHello("Hanafi")