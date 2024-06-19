//membuat objek kosong
const orang = {}

//menambah objek atau mengubah
orang['nama'] = "Muhamad Rifqi"
orang['alamat'] = "indonesia"
orang['umur'] = 22

//menghapus
delete orang['umur']

console.table(orang)

const person = {
    nama: "kocak gaming",
    alamat: "indo",
    umur: 20
}

console.table(person)
//mengakses objek
console.info(`Nama: ${person.nama}`)
console.info("Nama: " + person['nama'])



