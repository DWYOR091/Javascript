//mengecek data yg ada di dalam objek
//in hanya mengecek index atau property yg ada  jika null atau undefined maka dianggap ada

const person = {
    nama: "Muhamad Rifqi",
    prodi: "Teknik Informatika B"
}

console.info("nama" in person)//true

const names = [null, 'rifqi', null]
console.info(0 in names) //true