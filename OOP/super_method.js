//super juga bisa mengakses method parent

class Shape {
    paint() {
        console.info("Paint Shape")
    }
}

class Circle extends Shape {
    paint() {
        super.paint() //memanggil method parent
        console.info("Paint Circle")
    }
}


const c = new Circle()

c.paint()