function chainingPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data dari promise pertama";
      resolve(data);
    }, 1000);
  });
}

chainingPromises()
  .then((data) => {
    console.log("Promise pertama terpenuhi =>", data);

    return "Data dari promise kedua";
  })
  .then((data) => {
    console.log("Promise kedua terpenuhi =>", data);
    throw new Error("Terjadi kesalahan");
  })
  .catch((err) => {
    console.error("Terjadi kesalahan", err);
  });
