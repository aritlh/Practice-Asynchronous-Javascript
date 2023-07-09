
/**
 * ! Callbacks dengan Error Handling
 */
function errHandling(callback) {
    setTimeout(() => {
        const err = new Error("Data error")
        callback(err, null)
    })
}

errHandling((err, data) => {
    if (err) {
        console.info("Terjadi kesalahan", err)
    } else {
        console.info("Data: ", data)
    }
})