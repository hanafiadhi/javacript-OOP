class MathUntil{
    static sum(...numbers){
        if (numbers.length === 0) {
            throw new Error("Total Parameter harus lebih dari 0")
        }
        let total = 0
        for (const number of numbers) {
            total+= number
        }
        return total
    }
}
try {
    console.log(MathUntil.sum(1,2,3,4))
    console.log("code")
} catch (error) {
    console.log(`pesan : ${error.message}`)
}finally{
    console.log("code finish")
}
console.log("code selesai")

class Counter {
    #counter = 1
    
    next(){
        try {
            return this.#counter
        } finally{
            this.#counter++
        }
    }
}

const counters = new Counter()
console.log(counters.next())
console.log(counters.next())
console.log(counters.next())
console.log(counters.next())
console.log(counters.next())