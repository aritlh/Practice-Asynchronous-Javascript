import fetch from "node-fetch";

/**
 * ! Callback
 * ! Get a single product
 */

function getSingleProduct(callback) {
  setTimeout(() => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        callback(null, data); // Mengirimkan null sebagai argumen error dan data sebagai argumen hasil
      })
      .catch((error) => {
        callback(error, null); // Mengirimkan error sebagai argumen error dan null sebagai argumen hasil
      });
  }, 100);
}

function processSingleProduct(error, data) {
  if (error) {
    console.error("Terjadi Kesalahan:", error);
  } else {
    console.info("Berhasil diterima kembali data:", data);
  }
}

getSingleProduct(processSingleProduct);

/**
 * ! Promise
 * ! Get a single cart
 */

function getSingleCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/carts/1")
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }, 100);
  });
}

getSingleCart()
  .then((data) => {
    console.info("Berhasil diterima kembali data:", data);
  })
  .catch((error) => {
    console.error("Terjadi Kesalahan:", error);
  });

/**
 * ! Async/await
 * ! Get a single user
 */

function getSingleUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/users/1")
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

async function processSingleUser() {
  try {
    const data = await getSingleUser();
    console.info("Berhasil diterima kembali data:", data);
  } catch (err) {
    console.error("Terjadi Kesalahan:", err);
  }
}

processSingleUser();
