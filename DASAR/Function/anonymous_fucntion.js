//fungsi tanpa nama

//tanpa parameter
let say = function () {
    document.write("Rifqi")
}

say()

let nama = function (nama) {
    document.write(`<br> Nama: ${nama}`)
}

nama('rifqi')


//anonym function di parameter
function giveMeName(callback) {
    callback("<br>kocak")
}

giveMeName(function (nama) {
    document.write(`Nama: ${nama}`)
})