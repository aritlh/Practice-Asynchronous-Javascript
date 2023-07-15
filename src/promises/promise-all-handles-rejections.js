/**
 * ! Bagaimana cara Promise.all() menghandle penolakan/rejection?
 */

/**
 * ! Cara Biasa
 * penolakan (rejection) dari promise lainnya di dalam Promise.all tidak akan tertangkap jika sudah ada satu promise yang terlebih dahulu direject.
 */
const promise1 = Promise.resolve("Hello");
const promise2 = Promise.reject("Error!");
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, "World"));

Promise.all([promise1, promise2, promise3]).catch((err) => {
  console.log(err); // Error!
});

/**
 * ! Menggunakan .catch()
 */

const withCatch1 = Promise.resolve("Hello");
const withCatch2 = Promise.reject("Error 2").catch((err) => {
  console.log(err); // Error 2
});

const withCatch3 = Promise.reject("Error 3").catch((err) => {
  console.log(err); // Error 3
});

Promise.all([withCatch1, withCatch2, withCatch3]).catch((err) => {
  console.log(err); // Error 3
});

/**
 * ! Menggunakan .allSettled()
 */

const withSettled1 = Promise.reject("Error 1");
const withSettled2 = Promise.reject("Error 2");
const withSettled3 = Promise.resolve("Hello World");

Promise.allSettled([withSettled1, withSettled2, withSettled3]).then(
  (result) => {
    result.forEach((result) => {
      result.status === "fulfilled" ? console.log(result) : console.log(result);
    });
  }
);
