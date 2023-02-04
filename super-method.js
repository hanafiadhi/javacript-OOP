class Shape {
    paint(){
        console.info("Pain Shape")
    }
}
class Circle extends Shape{
    paint(){
        super.paint()
        console.log("Pain Cirle")
    }
}

const lingkaran = new Circle()
lingkaran.paint()