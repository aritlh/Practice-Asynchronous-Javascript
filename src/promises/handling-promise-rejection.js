/**
 * ! Menangani penolakan promise
 */

/**
 * ! Menggunakan .catch()
 */

function useCatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Data gagal dimuat"));
    }, 200);
  });
}

useCatch()
  .then((data) => {
    console.info("Berhasil diterima kembali data:", data);
  })
  .catch((err) => {
    console.error(err);
  });

/**
 *  ! Menggunakan try{}catch(){}
 */

function useTryCatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Data gagal dimuat"));
    }, 200);
  });
}

async function getTryCatch() {
  try {
    const data = await useTryCatch();

    console.log("Berhasil diterima kembali data:", data);
  } catch (err) {
    console.error("Terjadi Kesalahan:", err);
  }
}

getTryCatch();

/**
 * ! Menggabunkan .catch() dan .then()
 */

function getCatchThen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data diterima dari fungsi getCatchThen()";

      reject(new Error("Data gagal dimuat"));
    });
  });
}

getCatchThen().then(
  (data) => {
    console.info("Berhasil diterima kembali data:", data);
  },
  (err) => {
    console.error("Terjadi Kesalahan:", err);
  }
);
