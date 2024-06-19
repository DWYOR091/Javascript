function createAdder(value) {
    const owner = "rifqi"
    function add(param) {
        document.write(owner)
        return value + param
    }

    return add
}
//closure itu cara untuk mengakses fungsi dlm local scope

const addTwo = createAdder(2)
document.write(addTwo(2))