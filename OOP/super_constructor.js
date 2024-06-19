//jika di parent tidak ada constructor
//wajib di panggil di childkannya

class Employee {

    constructor(firstname) {
        this.firstname = firstname
    }

    sayHello(nama) {
        console.info(`Hi ${nama}, my name is ${this.firstname}`)
    }
}

class Manager extends Employee {
    constructor(lastName) {
        //mengakses construct milik parent super(params)
        super(firstname)
        this.lastName = lastName
    }

    sayHello(nama) {
        console.info(`Hi ${nama}, my name is ${$this.lastName}`)
    }
}


