const rifqi = {
    firstName: "Muhamad",
    lastName: "Rifqi"
}

//constructornya
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = (name) => {
        console.info(`Nama ${name}, my name is ${this.lastName}`)
    }
}

//instansiasi object
const person = new Person('Muhamad', 'rifqi')

person.sayHello("rifqi")

//menambahkan prop function ke dlm obj
person.bye = () => {
    console.info("goodBye")
}
//cara panggilnya
person.bye()

