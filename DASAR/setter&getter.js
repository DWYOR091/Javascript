const person = {
    firstName: "Muhamad",
    lastName: "Rifqi",
    //getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    // setter
    set fullName(val) {
        const array = val.split(" ")
        this.firstName = array[0],
            this.lastName = array[1]
    }
}

//cara set 
person.fullName = "Muhamad Rifqi"
//cara panggil getter
document.write(person.fullName)
document.write(person.firstName)
document.write(person.lastName)