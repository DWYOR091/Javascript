//
const nilaiUjian = 76
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian > 75
const lulusAbsensi = nilaiAbsensi > 75

//dan
let lulus = lulusUjian && lulusAbsensi
document.write(lulus + "<br>")

//atau
lulus = lulusUjian || lulusAbsensi
document.write(lulus + "<br>")

//unary 
lulus = lulusUjian && !lulusAbsensi
document.write(lulus)