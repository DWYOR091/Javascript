const nama = "Muhamad Rifqi"

//instance method dan properties
console.info(nama.length) //menghitung panjang char
console.info(nama.toLocaleLowerCase()) //huruf jadi kecil
console.info(nama.toUpperCase()) //huruf jadi besar
console.info(nama.split(" ")) //memisahkan dngan spasi jadi array
console.info(nama.charAt(1)) //mengembalikan char pd indeks yg ditentukan

console.info(nama.concat(" ", "haha"))// menggabungkan string

console.info(nama.includes('Rifqi')) //mencari apakah ada value rifqi jika ada true

console.info(nama.substring(0, 7)) //mengambil bagian dari string index awal ampe akhir

console.info(nama.trim()) //menghapus spasi pada sisi kanan dan kiri kalimat
