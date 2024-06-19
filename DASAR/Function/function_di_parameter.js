function sayHello(nama, umur) {
    document.write(`<br> Nama: ${nama} . Umur: ${umur}`)
}

let say = sayHello

//function di parameter
function giveMeNeme(callback) {
    callback("lol", 22)
}

// giveMeNeme()
giveMeNeme(say)