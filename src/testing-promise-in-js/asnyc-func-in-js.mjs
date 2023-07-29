import fetch from "node-fetch";

/**
 * ! Async function in javascript
 */

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products/1");
  const data = await response.json();

  return data;
}

getProducts()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
