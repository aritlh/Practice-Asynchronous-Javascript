/**
 * ! Synchronous Callbacks
 */

function getDataSync(data, callback) {
  const result = "Hasil memproses data";
  callback(result);
}

const data = "Data dummy";
getDataSync(data, (result) => {
  console.info(result);
});
