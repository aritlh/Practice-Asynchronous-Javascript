/**
 * ! Callbacks dengan Error Handling
 */

function errHandling(callback) {
  setTimeout(() => {
    const err = new Error("Data error");
    callback(err, null);
  });
}

errHandling((err, data) => {
  if (err) {
    console.error("Terjadi kesalahan", err);
  } else {
    console.error("Data: ", data);
  }
});
