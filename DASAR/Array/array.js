//array adalah kumpulan data

//cara membuat array
let arrayKosong = []

let arrayNama = ["Muhamad", "Rifqi"]


//cara menambahkan array kosong
const names = []
names.push("kocak")
names.push("Muhamad", "Rifqi")

// console.table(names)

// console.info("panjang array: " + names.length)
//cara mendapattkan data diposisi indexnya
// console.info(names[2])
//cara mengubah isi data array di posisi indexnya
// console.info(names[0] = "hehe")

//cara lama menghapus array
// console.info(delete names[0])

//shift untuk menghapus dari kiri
// console.info(names.shift())
//pop untuk menghapus array daru kanan
// console.log(names.pop())
//filter untuk membuat array baru
let newNames = names.filter((depan, belakang) => depan.length == 5)
// console.table(newNames)//datanya sisa2

//splice
let coba = names.splice(3, 0)
console.table(coba)
console.table(names)

