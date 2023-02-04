class ValidationError extends Error{
    constructor(message,field){
        super(message);
        this.field = field;
    }
}
class MathUntil{
    static sum(...numbers){
        if (numbers.length === 0) {
            throw new ValidationError("Total Parameter harus lebih dari 0","numbers")
        }
        let total = 0
        for (const number of numbers) {
            total+= number
        }
        return total
    }
}
try {
    console.log(MathUntil.sum())
    console.log("code")
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Terjadi Eroor dengan Field : ${error.field} pesan : ${error.message}`)
    }else{
         console.log(`pesan : ${error.message}`)
    }
}finally{
    console.log("code finish")
}
console.log("code selesai")