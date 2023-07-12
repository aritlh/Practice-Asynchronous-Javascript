import fetch from "node-fetch";

const a = async (callback) => {
  const response = await fetch("https://dummyjson.com/carts/1");

  const x = await response.json();
  callback(x);
};

const b = (x) => {
  console.log("Hello world");

  if (!x) {
    console.info("error");
  }

  console.info(x);
};

a(b);
