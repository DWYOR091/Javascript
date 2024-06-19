//menggunakan with statement bisa memanggil property tanpa harus menyebutkan datanya
//tetapi tidak disarankan pakai ini karena dapat membuat ambigu

const person = {
    nama: "kocak gaming",
    alamat: "indo",
    umur: 20
}

with (person) {
    document.write(`${nama} <br>`)
    document.write(`${alamat}`)
}