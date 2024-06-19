const nama = "Muhamad Rifqi".split(" ")
console.info(nama.map(val => val.toUpperCase()))

const numbers = [1, 2, 3, 4, 5]

console.info(numbers.reduce((result, value) => value - result)) // dari kiri ke kanan