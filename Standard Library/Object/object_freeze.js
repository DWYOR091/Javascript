const person = {
    firstName: "Muhamad",
    lastName: "Rifqi"
}


Object.freeze(person)

person.firstName = "kocak" //tidak berubah
delete person.firstName
console.info(person)