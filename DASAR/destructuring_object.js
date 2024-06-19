//desctructuring di param
function displayPerson({ firstName, lastName, nim }) {
    document.write(firstName)
    document.write(lastName)
    document.write(nim)
}


const person = {
    firstName: "Muhamad",
    lastName: "Rifqi",
    nim: 2113221035
}

displayPerson(person)

//namanya harus sama seperti didlm object kalau array bebas namanya
const { firstName, lastName, nim } = person

document.write(nim)

//bisa pakai default value
// desctruturing param 2
function sum([first, second = 2]) {
    return document.write(`<br> ${first + second}`)
}

sum([1])
