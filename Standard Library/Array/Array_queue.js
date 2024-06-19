const queue = []

//menambahkan
queue.push("Jeruk")
queue.push("Apel")
queue.push("Mangga")

//menambahkan ke depan
queue.unshift("Sirsak")
//mehapus paling belakang
console.info(queue.pop())
//menghapus depan
console.info(queue.shift())