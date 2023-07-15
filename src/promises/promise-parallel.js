/**
 * ! Melaksanakan promise secara parallel: Promise.all()
 */

const promise1 = Promise.resolve("Hello");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "World"));

Promise.all([promise1, promise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
