/**
 * ! Async/Await dengan try/catch
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = new Error("Terjadi kesalahan")
            reject(err)
        }, 2000)
    })
}

async function getData() {
    try {
        const data = await fetchData()
        console.info("Data:", data)
    } catch (err) {
        console.info("Terjadi Kesalahan", err)
    }
}

getData()