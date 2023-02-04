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

console.log(MathUntil.sum())
console.log(MathUntil.sum(1,1,1,1,1))