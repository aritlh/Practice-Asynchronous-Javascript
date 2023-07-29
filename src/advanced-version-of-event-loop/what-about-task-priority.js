/**
 * ! What about task priority
 */

setTimeout(() => {
  console.log("Task 1");

  setTimeout(() => {
    console.log("Task 2");
  }, 500);
}, 1000);

/**
 * Jika menggunakan async-await, await akan "menahan" eksekusi hingga task sebelumnya selesai
 */
function task1() {
  console.log("Task 1 dari async");
}

function task2() {
  console.log("Task 2 dari async");
}

async function exec() {
  await task2();
  task1();
}

exec();

/**
 * Promise.all akan menjalankan task secara paralel, tapi menunggu semuanya selesai
 */
function lp1() {
  console.log("Task 1 dari lp1");
}

function lp2() {
  console.log("Task 2 dari lp2");
}

await Promise.all([lp1()]);
lp2();
