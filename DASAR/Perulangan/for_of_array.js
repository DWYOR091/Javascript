//for of untuk iterasi terhadap isi value dari iterable object ,seperti array string dll
//for of tidak bisa iterasi data object karena objek bukan iterable

const names = ['Muhamad', 'Rifqi', 'Kocak']

for (const name of names) {
    document.write(`${name} <br>`)
}

const nama = "Muhamad Rifqi"

for (const char of nama) {
    document.write(`${char}`)
}