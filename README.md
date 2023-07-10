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

# Dependencies

![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/zen2kai/async_js/node-fetch?style=flat-square)

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
const myPromise = new Promise(function (resolve, reject) {
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
