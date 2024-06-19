class Person {
    nama = "rifqi"
    constructor(nama) {
        console.info(this.nama = nama)
    }

    //cara membuat method
    sayHello(name) {
        console.info(`Hi ${name}, my name is ${this.nama}`)
    }
}
//instance obj
const rifqi = new Person("nama")
console.info(rifqi)
//call function dari obj
rifqi.sayHello('Kocak')