const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.info(array.find(value => value > 3))
console.info(array.findIndex(value => value > 3))
console.info(array.includes(7))
console.info(array.indexOf(2))
console.info(array.lastIndexOf(2))
console.info(array.join('-'))
console.info(array.slice(1, 2))
console.info(array.map(x => x * 2))