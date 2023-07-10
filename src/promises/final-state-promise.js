/**
 *  ! Cara Mengkonsumsi Janji JavaScript: Promise.then
 */

// fungsi simulasi operasi async
const finalStatePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true;

      if (!data) {
        reject("Terjadi kesalahan");
      }
      resolve(data);
    }, 2000);
  });
};

finalStatePromise()
  // untuk menentukan ketika tindakan Promise terpenuhi
  .then((data) => {
    console.log("Berhasil diterima data:", data);
  })

  // untuk menentukan ketika tindakan Promise tidak terpenuhi
  .catch((err) => {
    console.error(err);
  });

async function fetchData() {
  try {
    const data = await finalStatePromise();
    console.log("Berhasil diterima kembali data:", data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

console.log("hello buddy");
