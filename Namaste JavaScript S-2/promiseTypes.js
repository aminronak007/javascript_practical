const promise1 = new Promise((resolve, reject) => {
  const err = new Error("Promise 1");
  //   setTimeout(() => {
  //     resolve("Promise 1");
  //   }, 6000);
  setTimeout(() => {
    const err = new Error("Promise 1 fail");
    reject(err);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Promise 2");
  //   }, 5000);
  setTimeout(() => {
    const err = new Error("Promise 2 fail");
    reject(err);
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Promise 3");
  //   }, 2000);

  setTimeout(() => {
    const err = new Error("Promise 3 fail");
    reject(err);
  }, 2000);
});

// Promise - ALL
// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// // Promise - ALLSETTELED
// Promise.allSettled([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err.message);
//   });

// // Promise - RACE
// Promise.race([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise - ANY
Promise.any([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err.errors);
  });
