/**
 * ! Promise.resolve() dan promise.reject()
 */

/**
 * ! Promise.resolve()
 */

const promiseResolve = Promise.resolve("Hello world");

promiseResolve.then((data) => {
  console.info("Berhasil diterima kembali data:", data);
});

/**
 * ! Promise.reject()
 */

const promiseReject = Promise.reject(new Error("Data gagal dimuat"));

promiseReject.catch((err) => {
  console.error("Terjadi Kesalahan:", err);
});
