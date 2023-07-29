/**
 * ! A Closer Look at the Task Queue
 */

/**
 * Microtask selalu didahulukan eksekusinya dibanding macrotask. Macrotask mengikuti aturan FIFO dalam queue.
 */

// Macrotask
setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

// Microtask
Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => console.log("Promise 2"));
