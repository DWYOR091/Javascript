const hello = (name) => {
    const say = `Nama: ${name}`
    return document.write(`${say} <br>`)
}

hello('Rifqi')

//arrow function tanpa block code
const sum = (a, b) => a + b

document.write(sum(1, 2))

//arrow function tanpa kurng param
const nama = name => `Nama: ${name}`

document.write(nama('kocak'))

//arrow function sebagai parameter
function giveMeName(callback) {
    callback('hehe')
}

giveMeName(names => document.write(`<br> Namanya: ${names}`))
