export class Person {
    constructor(nama) {
        this.nama = nama
    }


    hello(nama) {
        console.log(`Hello ${nama}, my name is ${this.nama}`)
    }
}