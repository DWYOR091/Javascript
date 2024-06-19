function useStrictMode() {
    'use strict'
    const person = {
        firstName: "rifqi"
    }
    with (person) {
        console.info(firstName)
    }
}

useStrictMode()