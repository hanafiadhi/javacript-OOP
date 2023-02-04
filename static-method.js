class MathUntil{
    static sum(...numbers){
        let total = 0
        for (const number of numbers) {
            total+= number
        }
        return total
    }
}

console.log(MathUntil.sum(1,1,1,1,1))