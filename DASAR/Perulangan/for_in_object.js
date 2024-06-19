//pengecekan objek menggunakan for in
//for in gunanya untuk pengecekan iterasi seluruh data property di object atau array
//for in untuk melakukan iterasi property atau index
const orang = {
    namaDepan: "Muhamad",
    namaBelakang: "Rifqi"
}

for (const props in orang) {
    document.write(`Property: ${props} ${orang[props]} <br>`)
}