/**
 * ! Handling Long Tasks in JavaScript. Part 2
 */

// Main thread
function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

addEventListener("message", (event) => {
  showLog(event.data);
  postMessage("Done");
});
