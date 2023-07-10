/**
 * ! Promisify pada setiap fungsi javascript
 */

import fs from "fs";

function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject("Tidak ada data");
      }

      resolve(data);
    });
  });
}

readFileAsync("file.txt")
  .then((data) => {
    console.info("Isi file:", data);
  })
  .catch((err) => {
    console.error(err);
  });
