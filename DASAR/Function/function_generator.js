function* createNames() {
    yield "Muhamad"
    yield "Rifqi"
}

const names = createNames()

for (const name of names) {
    document.write(name)
}