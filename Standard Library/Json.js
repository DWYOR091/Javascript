const person = {
    firstName: "Muhamad",
    lastName: "Rifqi",
    address: {
        country: "Indonesia",
        city: "Cimahi"
    }
}

const json = JSON.stringify(person)
const personAgain = JSON.parse(json)

console.log(json)
console.log(personAgain)