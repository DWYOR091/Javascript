//pewarisan
class Employee {
    //method
    sayHello(nama) {
        console.info(`Hi ${nama}, my name is ${this.nama}`)
    }
}

class Manager {
    sayHello(nama) {
        console.info(`Hi ${nama}, my name is ${this.name}`)
    }
}

const budi = new Employee()
budi.nama = "Budi"
budi.sayHello("Joko")

const rifqi = new Manager()
rifqi.name = "Rifqi"
rifqi.sayHello("Joko")