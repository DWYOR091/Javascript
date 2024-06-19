//Number gunanya untuk mengkonversi ke tipedata number jika tidak bisa akan NaN
//contoh
const input = "123"
const number = Number(input)
console.log(number)

//static properties
console.info(Number.MIN_VALUE)
console.info(Number.MAX_VALUE)

//static method
const data = Number('12345')
console.info(Number.isInteger(data)) // true
console.info(Number.isNaN(data))//false

//instance method
const value = Number(12345)
console.info(value.toString(2))
const options = {
    style: "currency",
    currency: 'IDR'
}
console.info(value.toLocaleString("id-ID", options))

