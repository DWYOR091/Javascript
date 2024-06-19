//string template menggunakan backtick

const nama = "Muhamad Rifqi"
const value = 80
let template = `Nama: ${nama}`

document.write(template + "<br>")
console.info(template)

//menggunakan kode expression
template = `Nama: ${nama}, Lulus: ${value > 75}`
document.write(template)

//string multiline dgn pakai enter
const a = `Nama Saya Muhamad Rifqi
Teknik Informatika B
testing
            `;
document.write(`<pre>${a}</pre>`)
