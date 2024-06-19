const array = ["Jeruk", "Mangga", "Nanas"]

//array loop
array.forEach(function (value, index) {
    console.info(`${index} : ${value}`)
})
//pake arrow func
array.forEach((value, index) => console.info(`${index} : ${value}`))

array.forEach((value, index) => console.info(index))



