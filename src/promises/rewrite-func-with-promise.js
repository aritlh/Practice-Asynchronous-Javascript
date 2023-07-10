/**
 * ! Menulis ulang fungsi menggunakan Promise
 */

function withoutPromise(callback) {
  setTimeout(() => {
    const data = "Data diterima dari fungsi withoutPromise()";
    callback(data);
  }, 200);
}

function withPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data diterima dari fungsi withPromise()";

      if (!data) {
        reject("Data gagal dimuat");
      }

      resolve(data);
    });
  });
}

function processData(data) {
  console.log("Data telah di proses =>", data);
}

withoutPromise(processData);

withPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
