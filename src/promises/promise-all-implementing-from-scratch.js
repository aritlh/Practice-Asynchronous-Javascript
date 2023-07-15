/**
 * ! Promse.all(): menerapkan dari awal
 */

// Membuat fungsi Promise.all()
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Memeriksa input dan validasi variable
    if (!Array.isArray(promises)) {
      return reject(new Error("Expected an array"));
    }

    // Inisiasi variabel kosong untuk menyimpan hasil dan counter jumlah promise yang sudah selesai
    let results = [];
    let completedPromises = 0;

    // Lakukan looping pada array promise menggunakan forEach
    promises.forEach((promise, index) => {
      // Pada setiap iterasi, tambahkan handler then untuk promise
      promise
        .then((result) => {
          // Di dalam handler then, simpan hasil promise ke array results dengan index yang sesuai
          results[index] = result;

          // Tambahkan counter completedPromises di dalam handler then
          completedPromises++;

          // Periksa apakah counter sama dengan total promise, jika ya resolve promise utama
          if (completedPromises === promises.length) {
            resolve(results);
          }

          // Tambahkan handler catch untuk menangani error
        })
        .catch(reject);
    });
  });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

promiseAll([promise1, promise2]).then((result) => {
  console.log(result); // [1, 2]
});
