import fetch from "node-fetch";

/**
 * ! Top level await
 */

const response = await fetch("https://dummyjson.com/products/1");
const data = await response.json();
console.info(data);
