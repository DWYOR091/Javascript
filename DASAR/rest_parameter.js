//rest parameter fitur dimana kita bisa mengirimkan data sebanyak banyaknya
//harus disimpan di akhir parameter tidakboleh didepan atau d tengah

// function sum(name, ...data) {
//     let total = 0
//     for (const item of data) {
//         total += item
//     }
//     document.write(`Total ${name} is ${total}`)
// }

//menggunakan arguments tidak disarankan mending pakai rest parameter ...data

function sum() {
    let total = 0
    for (const item of arguments) {
        total += item
    }
    document.write(`Total is ${total}`)
}

sum(2, 3, 4, 5, 6)
//menggunakan spreed syntax
// sum('Orange', ...[2, 3, 4, 5, 6])