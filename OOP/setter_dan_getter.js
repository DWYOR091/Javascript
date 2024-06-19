//setter dan getter ini akan brada di protype

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //setter
    set fullName(value) {
        const result = value.split(" ")
        this.firstName = result[0]
        this.lastName = result[1]
    }
}


const p = new Person('Muhamad', 'Rifqi')

console.info(p.fullName)
p.fullName = "Kocak Gaming" // cara setter
console.info(p.fullName)