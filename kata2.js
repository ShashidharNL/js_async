function devide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Can't devide by zero"));
  } else {
    callback(null, a / b);
  }
}

devide(10, 0, (err, res) => {
  if (err) {
    console.log("Error :", err.message);
  } else {
    console.log("Result :", res);
  }
});
