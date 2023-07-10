/**
 * ! Bagaimana cara consume JavaScript Promises: Promise.then()
 */

const consumeJsPromise = async () => {
  const myPromise = new Promise((resolve, reject) => {
    const data = "Data yang diterima";

    if (!data) {
      reject("datanya mana?!!");
    }
    resolve(data);
  });

  myPromise
    .then((result) => {
      console.log("Promise terpenuhi", result.toUpperCase());
    })
    .catch((err) => {
      console.error(err);
    });
};

consumeJsPromise();
