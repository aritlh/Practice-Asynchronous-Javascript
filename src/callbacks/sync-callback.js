/**
 * ! Synchronous Callbacks
 */
function syncCallback(data, callback) {
  const result = "Hasil memproses data";
  callback(result);
}

const data = "Data dummy";
syncCallback(data, (result) => {
  console.info(result);
});
