function sayHello() {
    document.write("Hello" + "<br>")
}

//panggil function
sayHello()

//function pakai parameter
function fullName(namaDepan, namaBelakang) {
    document.write(`Nama: ${namaDepan} ${namaBelakang} <br>`)
}

fullName('Muhamad', 'Rifqi')
fullName('Kocak', 'Gaming')


//function return value atau mengembalikan nilai
function sayKocak() {
    const say = document.write("Kocak <br>")
    return say
}

sayKocak()

//menghentikan eksekusi dgn return + memberikan nilai default
function isContains(array, searchValue = 5) {
    for (const element of array) {
        if (element === searchValue) {
            return true
        }
    }
    return false
}

document.write(isContains([1, 2, 3, 4, 5]))