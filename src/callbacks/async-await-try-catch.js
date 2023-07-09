/**
 * ! Async/Await dengan try/catch
 */

function fetchData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = new Error("Throwing data");
      reject(err);
    }, 2000);
  });

  return promise;
}

async function getData() {
  try {
    const data = await fetchData();
    console.info("Data:", data);
  } catch (err) {
    console.error("Terjadi Kesalahan", err);
  }
}

getData();
