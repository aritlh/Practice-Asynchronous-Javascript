import fetch from "node-fetch";

// callback
function getSingleCart(callback) {
  fetch("https://dummyjson.com/carts/1")
    .then((response) => {
      if (!response.ok) throw new Error("tidak ditemukan");

      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      callback(err);
    });
}

// promise without new Promise
const getSingleUser = () => {};
// promise
const getSingleProduct = async () => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("https://dummyjson.com/products/1");

    const data = response.json();

    if (!data) {
      reject("Tidak ditemukan");
    }

    resolve(data);
  })
    .then((data) => {
      console.info("\n\n\nMenampilkan data (get single product):\n\n", data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// async/await
const getSinglePost = async (callback) => {
  const response = await fetch("https://dummyjson.com/posts/1");

  const data = await response.json();

  callback(data);
};

// call the function

getSingleCart((data, err) => {
  if (!data) console.error(err);
  console.info("\n\n\nMenampilkan data (get all single cart)\n\n", data);
});

getSingleProduct();

getSinglePost((data) => {
  console.log("\n\n\nMenampilkan data (get single post)\n\n", data);
});
