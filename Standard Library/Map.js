//map representasi struktur data key value

const map = new Map()
map.set("Name", "Muhamad Rifqi")
map.set("Address", "Indonesia")

console.info(map)
console.info(map.get("Name"))
console.info(map.get("Address"))

for (const elements of map) {
    const info = `${elements[0]} = ${elements[1]}`

    console.info(info)
}
