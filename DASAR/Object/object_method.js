const person = {
    nama: "Rifqi",
    sayHello: function (name) {
        document.write(`Hello ${name}, My name is ${this.nama}`)
    }
}


person.sayKocak = (name) => {
    document.write(`<p>Hello ${name}<p>`)
}

person.sayHello('rifqi')

person.sayKocak('kocak')