/**
 * ! Promise mana yang lebih cepat? Promise.race()
 */

/**
 * ! Only Promise.race()
 */

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "one"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "two"));

Promise.race([promise1, promise2]).then((data) => {
  console.log(data);
});

/**
 * ! Promise.race() with .allSettled()
 */

Promise.allSettled([promise1, promise2]).then((data) => {
  console.log(data);
});
