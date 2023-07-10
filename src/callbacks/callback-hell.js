const callbacks = async () => {
  function callbackHell() {
    console.log("masih di Callback Hell 1");
    callbackHell2(() => {
      callbackHell3(() => {
        callbackHell4((callbackHell5) => {
          console.log("Akhirnya sampe juga", callbackHell5);
        });
      });
    });
  }

  function callbackHell2(callback) {
    setTimeout(() => {
      console.log("Callback Hell 2");
      callback();
    }, 1000);
  }

  function callbackHell3(callback) {
    setTimeout(() => {
      console.log("Callback Hell 3");
      callback();
    }, 1000);
  }

  function callbackHell4(callback) {
    setTimeout(() => {
      console.log("Callback Hell 4");
      callback("Callback Hell 5");
    }, 1000);
  }

  callbackHell(() => {});
};

callbacks();
