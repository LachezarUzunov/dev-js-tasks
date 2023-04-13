const promiseOne = new Promise((res, reject) => {
  setTimeout(() => {
    res("Resvoled");
  }, 5000);
});

const promiseTwo = new Promise((res, reject) => {
  setTimeout(() => {
    res("Resolved promise 2");
  }, 7000);
});

const promiseThree = Promise.all([promiseOne, promiseTwo]).then((value) => {
  return "Resolve promise 3";
});
