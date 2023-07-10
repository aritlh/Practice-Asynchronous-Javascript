/**
 * ! Contoh penggunaan Promise dalam JavaScript
 */

const fetchData = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Data yang diterima";
        resolve(data);
      }, 1000);
    });

    promise.then((data) => {
      console.info(data);
    });
  } catch (err) {
    console.error(err);
  }
};

fetchData();
