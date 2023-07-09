# Dependencies

![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/zen2kai/async_js/node-fetch?style=flat-square)

# Callback Example

Callback digunakan secara luas dalam banyak pustaka (libraries) JavaScript untuk menangani operasi asynchronous atau peristiwa-peristiwa tertentu. Berikut adalah beberapa contoh penggunaan callback dalam pustaka-pustaka JavaScript populer:

### Node.js:

Dalam lingkungan Node.js, banyak fungsi bawaan menggunakan pola callback untuk menangani operasi asynchronous.

Sebagai contoh, dalam fungsi `readFile` dari modul `fs`, Anda dapat memberikan callback sebagai argumen untuk menangani hasil pembacaan file.

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", function (error, data) {
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
$("#element").fadeIn("slow", function () {
  console.log("Animasi fadeIn selesai");
});
```

### Express.js:

Express.js, framework web populer di Node.js, juga menggunakan callback untuk menangani permintaan HTTP dan middleware.

Contoh penggunaan callback dalam penanganan rute HTTP:

```javascript
const express = require("express");
const app = express();

app.get("/route", function (req, res) {
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

User.findOne({ name: "John" }, function (error, user) {
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
getDataA(function (resultA) {
  processDataA(resultA, function (resultB) {
    getDataB(resultB, function (resultC) {
      processDataC(resultC, function (finalResult) {
        console.log(finalResult);
      });
    });
  });
});
```

Contoh penggunaan Promises untuk menghindari Callback Hell:

```javascript
getDataA()
  .then(function (resultA) {
    return processDataA(resultA);
  })
  .then(function (resultB) {
    return getDataB(resultB);
  })
  .then(function (resultC) {
    return processDataC(resultC);
  })
  .then(function (finalResult) {
    console.log(finalResult);
  })
  .catch(function (error) {
    console.error(error);
  });
```

Pada contoh pertama, terdapat callback yang bersarang secara berlebihan, di mana setiap operasi asynchronous membutuhkan callback dan menghasilkan pola yang rumit dan sulit dibaca.

Pada contoh kedua, Promises digunakan untuk menghindari Callback Hell. Setiap operasi asynchronous dikembalikan sebagai Promise, dan `.then()` digunakan untuk mengatur alur kode dengan lebih terstruktur. `.catch()` digunakan untuk menangani kesalahan jika terjadi.

Perhatikan bahwa contoh di atas hanya menggambarkan perbedaan dalam gaya penulisan kode antara Callback Hell dan penggunaan Promises. Implementasi sebenarnya dari fungsi `getDataA`, `processDataA`, `getDataB`, dan `processDataC` tidak diberikan dalam contoh ini.

> secara kesimpulan, jika callback hell itu `() => {}` bersarang, sedangkan penanganannya dengan membuat promise. adapun sebuah syntax promise itu yang dimana memiliki method `.then()` dan `.catch()`

Berikut contoh yang sedikit lebih detail terkait penggunaan Promises:

```javascript
getDataA()
  .then(function (resultA) {
    // Melakukan tindakan setelah Promise A terpenuhi
    return processDataA(resultA);
  })
  .then(function (resultB) {
    // Melakukan tindakan setelah Promise B terpenuhi
    return getDataB(resultB);
  })
  .then(function (resultC) {
    // Melakukan tindakan setelah Promise C terpenuhi
    return processDataC(resultC);
  })
  .then(function (finalResult) {
    // Melakukan tindakan setelah semua Promise terpenuhi
    console.log(finalResult);
  })
  .catch(function (error) {
    // Menangani kesalahan jika terjadi
    console.error(error);
  });
```

Dalam contoh di atas, setiap fungsi asynchronous (seperti `getDataA`, `processDataA`, dll.) mengembalikan Promise. Metode `.then()` digunakan untuk menghubungkan tindakan-tindakan yang akan dilakukan setelah Promise terpenuhi. Jika ada kesalahan, metode `.catch()` akan menangani kesalahan tersebut.

Selain Promises, ada juga pendekatan lain seperti Async/Await yang menyediakan cara penulisan kode yang lebih linier dan mudah dibaca dalam situasi yang melibatkan operasi asynchronous.
