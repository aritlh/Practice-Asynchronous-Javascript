<h1>ToC</h1>

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Testing](#testing)
- [Callback Example](#callback-example)
  - [Node.js:](#nodejs)
  - [jQuery:](#jquery)
  - [Express.js:](#expressjs)
  - [Mongoose:](#mongoose)
- [Callback Hell](#callback-hell)
- [Promise](#promise)
- [Promisify](#promisify)
- [Chaining Promises](#chaining-promises)

# Dependencies

![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/zen2kai/async_js/node-fetch?style=flat-square) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/zen2kai/async_js/dev/%40jest%2Fglobals/master?style=flat-square) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/zen2kai/async_js/dev/jest/master?style=flat-square)

# Installation

```shell
npm install
```

# Testing

```javascript
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
```

![jest](public/imgs/jest-test.png)

Dalam kasus ini, output menunjukkan bahwa pengujian "Menguji fetchData" telah berhasil dijalankan dan menghasilkan hasil yang diharapkan, sehingga pengujian lulus (pass).

# Callback Example

Callback digunakan secara luas dalam banyak pustaka (libraries) JavaScript untuk menangani operasi asynchronous atau peristiwa-peristiwa tertentu. Berikut adalah beberapa contoh penggunaan callback dalam pustaka-pustaka JavaScript populer:

### Node.js:

Dalam lingkungan Node.js, banyak fungsi bawaan menggunakan pola callback untuk menangani operasi asynchronous.

Sebagai contoh, dalam fungsi `readFile` dari modul `fs`, Anda dapat memberikan callback sebagai argumen untuk menangani hasil pembacaan file.

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Terjadi kesalahan:", error);
  } else {
    console.log("Isi file:", data);
  }
});
```

### jQuery:

jQuery menggunakan callback dalam berbagai metode untuk menangani operasi asynchronous atau peristiwa seperti animasi, permintaan AJAX, atau peristiwa DOM.

Contoh penggunaan callback dalam metode `fadeIn` untuk menangani animasi setelah selesai:

```javascript
$("#element").fadeIn("slow", () => {
  console.log("Animasi fadeIn selesai");
});
```

### Express.js:

Express.js, framework web populer di Node.js, juga menggunakan callback untuk menangani permintaan HTTP dan middleware.

Contoh penggunaan callback dalam penanganan rute HTTP:

```javascript
const express = require("express");
const app = express();

app.get("/route", (req, res) => {
  res.send("Hello, World!");
});
```

### Mongoose:

Mongoose adalah pustaka ODM (Object-Document Mapper) untuk MongoDB, dan juga menggunakan callback dalam berbagai operasi database asynchronous.

Contoh penggunaan callback dalam operasi `findOne`:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

User.findOne({ name: "John" }, (error, user) => {
  if (error) {
    console.error("Terjadi kesalahan:", error);
  } else {
    console.log("Data pengguna:", user);
  }
});
```

Pustaka-pustaka JavaScript lainnya, seperti Axios, Lodash, Async.js, dan banyak lagi, juga menggunakan callback dalam berbagai cara untuk menangani operasi asynchronous atau peristiwa tertentu. Callback memberikan fleksibilitas untuk menentukan logika yang akan dijalankan setelah operasi asynchronous selesai atau peristiwa terjadi.

# Callback Hell

Contoh Callback Hell:

```javascript
getDataA((resultA) => {
  processDataA(resultA, (resultB) => {
    getDataB(resultB, (resultC) => {
      processDataC(resultC, (finalResult) => {
        console.log(finalResult);
      });
    });
  });
});
```

Contoh penggunaan Promises untuk menghindari Callback Hell:

```javascript
getDataA()
  .then((resultA) => {
    // Melakukan tindakan setelah Promise A terpenuhi
    return processDataA(resultA);
  })
  .then((resultB) => {
    // Melakukan tindakan setelah Promise B terpenuhi
    return getDataB(resultB);
  })
  .then((resultC) => {
    // Melakukan tindakan setelah Promise C terpenuhi
    return processDataC(resultC);
  })
  .then((finalResult) => {
    // Melakukan tindakan setelah semua Promise terpenuhi
    console.log(finalResult);
  })
  .catch(function (error) {
    // Menangani kesalahan jika terjadi
    console.error(error);
  });
```

versi clean code:

```javascript
try {
  const resultA = await getDataA();
  const resultB = await processDataA(resultA);
  const resultC = await getDataB(resultB);
  const finalResult = await processDataC(resultC);
  console.log(finalResult);
} catch (error) {
  console.error(error);
}
```

Dalam kode di atas, async/await digunakan untuk menghindari penggunaan beruntun fungsi .`then()` dan menggantinya dengan struktur yang lebih sekuensial. Penanganan kesalahan dilakukan dengan menggunakan blok `try-catch`, sehingga kesalahan dapat ditangani dengan lebih jelas dalam blok catch.

# Promise

Untuk membuat sebuah Promise dalam JavaScript, Anda dapat menggunakan constructor `Promise`. Constructor `Promise` menerima satu argumen, yaitu fungsi eksekutor (executor function). Fungsi eksekutor tersebut memiliki dua parameter, yaitu `resolve` dan `reject`, yang merupakan fungsi yang digunakan untuk mengubah keadaan Promise menjadi terpenuhi (fulfilled) atau ditolak (rejected).

Berikut adalah contoh sederhana untuk membuat sebuah Promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Logika operasi asynchronous di sini

  // Jika operasi asynchronous berhasil
  // Memanggil resolve dengan hasil yang diinginkan
  resolve("Data yang diterima");

  // Jika operasi asynchronous gagal
  // Memanggil reject dengan alasan kesalahan
  // reject('Terjadi kesalahan');
});
```

Dalam contoh di atas, kita membuat sebuah Promise menggunakan constructor `Promise`. Dalam fungsi eksekutor, kita menempatkan logika operasi asynchronous yang ingin kita lakukan. Jika operasi asynchronous berhasil, kita memanggil fungsi `resolve` dengan hasil yang diinginkan, sedangkan jika operasi asynchronous gagal, kita memanggil fungsi `reject` dengan alasan kesalahan.

Setelah Promise dibuat, kita dapat menggunakan metode `.then()` dan `.catch()` untuk menentukan tindakan yang akan diambil ketika Promise terpenuhi atau ditolak. Misalnya:

```javascript
myPromise
  .then((data) => {
    console.log(data); // Menampilkan data yang diterima
  })
  .catch((error) => {
    console.error(error); // Menampilkan alasan kesalahan jika Promise ditolak
  });
```

Dalam contoh ini, kita menggunakan metode `.then()` untuk menentukan tindakan yang akan diambil ketika Promise terpenuhi, yaitu mencetak data yang diterima. Jika Promise ditolak, maka akan menjalankan metode `.catch()` dan mencetak alasan kesalahan.

Dalam prakteknya, fungsi eksekutor pada constructor `Promise` sering kali merupakan tempat di mana operasi asynchronous, seperti pemanggilan HTTP atau operasi berbasis file, dilakukan. Setelah operasi asynchronous selesai, fungsi `resolve` atau `reject` akan dipanggil untuk mengubah keadaan Promise sesuai dengan hasilnya.

# Promisify

Promisification adalah proses mengubah fungsi JavaScript yang menggunakan pola callback menjadi fungsi yang mengembalikan Promise. Ini memungkinkan kita untuk menggunakan pola penggunaan Promise yang lebih konsisten dalam kode kita.

1. Identifikasi fungsi yang akan dipromisifikasi:

   - Pilih fungsi yang menggunakan pola callback.
   - Pastikan fungsi tersebut mengikuti konvensi umum dalam pemrograman JavaScript di mana callback adalah argumen terakhir dalam daftar argumen.

2. Buat fungsi baru yang mempromisifikasi fungsi tersebut:
   - Buat fungsi baru yang mengembalikan Promise.
   - Di dalam fungsi baru, gunakan pola `resolve` dan `reject` untuk mengontrol keadaan Promise.
   - Panggil fungsi yang asli dengan menggunakan callback, dan terima hasilnya.
   - Di dalam callback, gunakan `resolve` untuk mengubah Promise menjadi terpenuhi dengan hasilnya, atau `reject` untuk menolak Promise dengan alasan kesalahan.

Berikut adalah contoh implementasi sederhana untuk mempromisifikasi fungsi `fs.readFile` yang ada dalam modul `fs` di Node.js:

```javascript
const fs = require("fs");

function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
```

Dalam contoh ini, kita membuat fungsi `readFileAsync` yang mempromisifikasi `fs.readFile`. Fungsi `readFileAsync` mengembalikan Promise yang memungkinkan kita untuk mengonsumsi hasilnya dengan menggunakan `.then()` dan `.catch()`.

Setelah fungsi dipromisifikasi, kita dapat menggunakannya dengan cara berikut:

```javascript
readFileAsync("file.txt")
  .then((data) => {
    console.log("Isi file:", data);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
```

Dalam contoh ini, kita memanggil `readFileAsync` yang mengembalikan Promise, dan kemudian menggunakan `.then()` dan `.catch()` untuk mengonsumsi hasilnya. Di dalam blok `.then()`, kita mencetak isi file yang diterima. Jika terjadi kesalahan, kita menangani penolakan Promise di blok `.catch()`.

Dengan mempromisifikasi fungsi, kita dapat menggunakan Promises secara konsisten dalam kode kita, menghindari pola callback hell, dan mengelola operasi asynchronous dengan lebih baik.

Penting untuk dicatat bahwa tidak semua fungsi JavaScript dapat dengan mudah dipromisifikasi. Beberapa fungsi memerlukan pengaturan dan penyesuaian lebih lanjut. Dalam beberapa kasus, pustaka khusus seperti `util.promisify` di Node.js dapat digunakan untuk mempromisifikasi fungsi secara otomatis.

# Chaining Promises

Chaining Promises adalah teknik di mana kita menggabungkan beberapa Promise secara berurutan, sehingga output dari Promise pertama menjadi input untuk Promise selanjutnya. Hal ini memungkinkan kita untuk mengatur alur eksekusi operasi asynchronous dengan lebih terstruktur dan membaca.

Berikut adalah langkah-langkah untuk melakukan Chaining Promises:

1. Membuat Promise pertama:

   - Buat Promise pertama menggunakan constructor `Promise`.
   - Di dalam fungsi eksekutor Promise, lakukan operasi asynchronous yang diinginkan.
   - Gunakan `resolve` untuk mengisi Promise dengan hasil operasi asynchronous atau `reject` jika terjadi kesalahan.

2. Menggunakan `.then()`:

   - Setelah Promise pertama terpenuhi, kita dapat menggunakan `.then()` untuk menentukan tindakan yang akan diambil ketika Promise terpenuhi.
   - Di dalam `.then()`, kita menerima argumen hasil dari Promise pertama dan melakukan tindakan yang diinginkan.
   - Kita juga dapat mengembalikan nilai dari `.then()`, yang akan menjadi input untuk `.then()` selanjutnya dalam rantai Promise.

3. Menggunakan `.catch()`:
   - Jika terjadi penolakan (rejection) dalam rantai Promise, kita dapat menggunakan `.catch()` untuk menangani penolakan tersebut.
   - Di dalam `.catch()`, kita dapat menangani kesalahan yang terjadi dan mengambil tindakan yang sesuai.

Berikut adalah contoh penggunaan Chaining Promises:

```javascript
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
```

Dalam contoh ini, kita membuat Promise pertama menggunakan fungsi `fetchData` yang mengembalikan Promise dengan hasil "Data dari Promise pertama". Setelah itu, kita menggunakan `.then()` untuk menentukan tindakan selanjutnya ketika Promise pertama terpenuhi.

Di dalam `.then()` pertama, kita mencetak hasil dari Promise pertama dan mengembalikan "Data dari Promise kedua". Nilai ini kemudian menjadi input untuk `.then()` kedua dalam rantai Promise. Di dalam `.then()` kedua, kita mencetak hasil dari Promise kedua dan melempar sebuah kesalahan.

Karena terjadi penolakan (rejection) dalam `.then()` kedua, kita menangani penolakan tersebut menggunakan `.catch()`. Di dalam `.catch()`, kita menangkap kesalahan yang terjadi dan mencetak pesan kesalahan.

Dengan Chaining Promises, kita dapat menggabungkan beberapa operasi asynchronous secara berurutan, memanipulasi hasilnya, dan menangani penolakan dengan lebih terstruktur.
