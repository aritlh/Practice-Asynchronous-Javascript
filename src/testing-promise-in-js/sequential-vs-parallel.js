/**
 * ! Sequential vs Parallel
 */

/**
 * Sequential
 */
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 done");
      resolve();
    }, 500);
  });
}

async function doSequential() {
  await task1();
  await task2();
}

doSequential();

/**
 * Parallel
 */

function pl1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 parallel done");
      resolve();
    }, 1000);
  });
}

function pl2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 parallel done");
      resolve();
    }, 500);
  });
}

async function doParallel() {
  await Promise.all([pl1(), pl2()]);
}

doParallel();
