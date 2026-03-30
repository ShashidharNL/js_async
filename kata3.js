function devide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cant devide by zero"));
  } else {
    callback(null, a / b);
  }
}

function devideAsync(a, b) {
  return new Promise((resolve, reject) => {
    devide(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

devideAsync(10, 0)
  .then((res) => {
    console.log("Result : ", res);
  })
  .catch((err) => {
    console.log("Error : ", err.message);
  });

devideAsync(10, 2)
  .then((res) => {
    console.log("Result : ", res);
  })
  .catch((err) => {
    console.log("Error : ", err.message);
  });
