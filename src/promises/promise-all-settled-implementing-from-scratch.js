/**
 * ! Promise.allSettled(): menerapkan dari awal
 */

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = {
            status: "fullfilled",
            value,
          };
        })
        .catch((reason) => {
          results[index] = {
            status: "rejected",
            reason,
          };
        })
        .finally(() => {
          completedPromises++;

          if (completedPromises == promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");

const promises = [promise1, promise2];

promiseAllSettled(promises).then((results) => {
  console.log(results);
});
