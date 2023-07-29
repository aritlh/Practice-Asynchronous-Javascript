/**
 * ! Promise.race: Implementing From Scratch
 */

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

const prom1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "satu")
);
const prom2 = new Promise((resolve, reject) => setTimeout(resolve, 200, "dua"));

promiseRace([prom1, prom2]).then((result) => console.info(result));
