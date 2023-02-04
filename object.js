function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = (name)=>(
        console.log(`Hello ${name} My name is ${this.firstName}`)
    )


}

const hanafi = new Person("Hanafi","adhi")
hanafi.sayHello("Ruby")


const budi = new Person()
console.log(hanafi)
console.log(budi)