class Employe{}

class Manager extends Employe{}

let hanafi = new Employe()
let rudi = new Manager

console.info(hanafi instanceof Employe)
console.info(hanafi instanceof Manager)
console.log()
console.log(rudi instanceof Employe)
console.log(rudi instanceof Manager)