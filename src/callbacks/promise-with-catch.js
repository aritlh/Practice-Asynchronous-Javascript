
/**
 * ! Promise dengan .catch()
 */
function promiseWithCatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = new Error("Data error")
            reject(err)
        }, 2000)
    })
}

promiseWithCatch().then((data) => {
    console.info("Data: ", data)
}).catch((err) => {
    console.info("Terjadi kesalahan pada:", err)
})