/**
 * ! Which Promise Is Faster? Promise.race()
 */

/**
 * Promise.race() menerima sekumpulan promise, dan akan mengembalikan nilai dari promise pertama yang settle, baik resolved atau rejected.
 */

// buat promise 1 dan promise 2
const prom1 = fetch("https://jsonplaceholder.typicode.com/photos");
const prom2 = fetch("https://jsonplaceholder.typicode.com/photos/1");

// gunakan Promise.race()
Promise.race([prom1, prom2]).then((data) => {
  if (!data) console.error("Promise 2 lebih cepat");
  console.info("Promies 1 lebih cepat");
});

/**
 * Promise.race sangat berguna untuk mengetahui performa beberapa async operation sekaligus. Kita bisa gunakan teknik ini misalnya untuk benchmark beberapa API endpoint.
 */
