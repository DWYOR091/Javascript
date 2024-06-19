class Customer {
    //public
    firstName;
    // ditambahkan # artinya private
    #lastName;
    balance = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //function private
    #counter() {
        console.log("this is private method")
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const tes = new Customer('Kocak', 'gamung')

document.write(tes.fullName)