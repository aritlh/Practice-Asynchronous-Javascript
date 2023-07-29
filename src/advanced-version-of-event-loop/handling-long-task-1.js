// Fungsi long task synchronous
function longTask() {
  console.log("Start long task");

  // Loop sebanyak 1000000x
  for (let i = 0; i < 1000000; i++) {
    // sekedar membuang waktu saja
    Math.random();
  }

  console.log("Finish long task");
}

// Blok UI selama longTask berjalan
console.time("longTask");
longTask();
console.timeEnd("longTask");

// Memecah long task menjadi chunk
function chunkedLongTask() {
  const chunkSize = 10000;
  let processed = 0;

  function processChunk() {
    console.log("Start chunk", processed);

    for (let i = processed; i < processed + chunkSize; i++) {
      Math.random();
    }

    processed += chunkSize;

    console.log("Finish chunk", processed);

    if (processed < 1000000) {
      setTimeout(processChunk, 0);
    }
  }

  processChunk();
}

// UI tetap responsif karena ada jeda setTimeout
console.time("chunkedLongTask");
chunkedLongTask();
console.timeEnd("chunkedLongTask");
