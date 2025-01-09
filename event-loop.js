const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log("Timer finished"), 0);
setImmediate(() => console.log("Immediate finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("-----------");

  setImmediate(() => console.log("2nd Immediate finished"));

  setTimeout(() => console.log("1st Timer finished"), 0);
  setTimeout(() => console.log(Date.now() - start, "2nd Timer finished"), 3000);
  setImmediate(() => console.log("1st Immediate finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("Hello Topzee");
