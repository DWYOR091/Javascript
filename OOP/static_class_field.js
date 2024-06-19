class Configuration {
    static name = "Belajar JS OOP"
    static version = "1.0"
    static author = "Rifqi"

    static sum(...value) {
        if (value.length === 0) {
            //penggunaan throw
            throw new Error("Total length harus lebih dari 0")
        }

        let total = 0
        for (const number of value) {
            total += number
        }

        return total
    }
}

//error handling try catch
try {
    //manggilnya tidak perlu instance obj
    console.info(Configuration.name)
    //method
    console.info(Configuration.sum(1, 2))
} catch (error) {
    console.error(error.message)
} finally {//kata finally akan dieksekusi mau error / tidak
    console.log("Kode progaram selesai")
}

