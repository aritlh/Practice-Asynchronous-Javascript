/**
 * ! Bagaimana cara menghindari callback hell
 */

import axios from "axios";

/**
 * ! Menggunakan promise
 */

function getAnimeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data diterima dari fungsi getAnimeData";

      if (!data) reject("Data gagal dimuat");

      resolve(data);
    }, 0);
  });
}

getAnimeData()
  .then((data) => {
    console.info("Berhasil diterima kembali data:", data);
  })
  .catch((err) => {
    console.error("Terjadi Kesalahan:", err);
  });

/**
 * ! Menggunakan async/await
 */

function getMhsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data diterima dari fungsi getMhsData";

      if (!data) reject("Data gagal dimuat");

      resolve(data);
    }, 0);
  });
}

async function processMhsData() {
  try {
    const data = await getMhsData();
    console.info("Berhasil diterima kembali data:", data);
  } catch (err) {
    console.error("Terjadi Kesalahan:", err);
  }
}

processMhsData();

/**
 * ! Menggunakan Library atau Framework yang Mendukung Promises atau Async Await
 *
 * Disini menggunakan axios
 */

axios
  .get("https://dummyjson.com/products/1")
  .then((response) => console.info(response.data))
  .catch((error) => console.error(error));
