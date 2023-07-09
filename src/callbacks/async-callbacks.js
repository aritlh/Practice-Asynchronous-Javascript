/**
 * ! Asynchronous Callbacks
 */
function asyncCallback(callback) {
  setTimeout(() => {
    const data = "Ini data dari tugas asynchronous";
    callback(data);
  }, 2000);
}

console.log("hello world");

asyncCallback((data) => {
  console.info(data);
});
