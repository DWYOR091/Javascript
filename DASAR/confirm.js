//confirm
const masuk = confirm("Apakah yakin?")
if (masuk) {
    const nama = prompt(`Siapa namanya?`)
    alert(`Nama: ${nama}`)
} else {
    alert('Goodbye')
}