/**
 * ! Callback Testing Pattern
 */

const { test, expect } = require("@jest/globals");

function fetchData(callback) {
  setTimeout(() => {
    const data = "Data yang diterima";
    callback(data);
  }, 1000);
}

test("Menguji fetchData", (done) => {
  fetchData((data) => {
    expect(data).toBe("Data yang diterima");
    done();
  });
});
