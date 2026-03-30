function greetLater(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 1000);
}

function greeting(name) {
  console.log("Hello,", name);
}
greetLater("Sahana!", greeting);
