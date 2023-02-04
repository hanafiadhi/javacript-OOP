class Configuration{
    static name = "Belajar Javacript Dasar"
    static version = 1
    static author = "hanafi adhi prasetyo"
}

const config = new Configuration()
console.warn(config)
console.log()
//cara mengaksesnya
console.log(Configuration.name)
console.log(Configuration.version)
console.log(Configuration.author)