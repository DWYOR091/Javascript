//masalah tanpa konversi
const value1 = 1
const value2 = "1"
let result = value1 + value2
document.write(result)//hasilnya jadi 11
document.write("<br>")

result = value1 + Number("1a")
document.write(result)//hasilnya jadi 2 karna sudah di konversi
result = value1 + parseFloat(value2)
result = value1 + parseInt(value2)
document.write(result)//hasilnya jadi 2 karna sudah di konversi

//cara cek Nan
const value3 = "1a"
document.write("<br>")
document.write(isNaN(value3))
