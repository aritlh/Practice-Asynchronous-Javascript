/**
 * ! Promise.any: Implementing From Scratch
 */

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let count = 0;

    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          errors[index] = error;
          count++;

          if (count === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}

const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) => setTimeout(resolve("Sukses 2"), 500));

promiseAny([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((errors) => {
    console.log(errors);
  });
