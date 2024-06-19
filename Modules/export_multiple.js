class Person {
    constructor(nama) {
        this.nama = nama
    }
}

function kocak(nama) {
    console.info("Hahahaha")
}

//multiple dan pakai alias
export { Person as orang, kocak }