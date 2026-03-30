function getUser(id) {
  return Promise.resolve({ id: 1, name: "sahana" });
}

function getOrders(userId) {
  return Promise.resolve([
    {
      id: 1,
      item: "Laptop",
    },
    {
      id: 2,
      item: "Mouse",
    },
  ]);
}

function getFirstOrder(orders) {
  if (!orders.length) return Promise.reject(new Error("No orders"));
  return Promise.resolve(orders[0].item);
}

getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getFirstOrder(orders))
  .then((item) => console.log("First Item:", item))
  .catch((err) => console.log("Error:", err.message));
