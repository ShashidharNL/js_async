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

function getConfig() {
  return Promise.resolve({ theme: "dark", lang: "en" });
}

async function loadFirstItem() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const item = await getFirstOrder(orders);
    console.log("First Item:", item);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

async function loadDashboard() {
  try {
    const [user, config] = await Promise.all([getUser(1), getConfig()]);

    console.log(
      `User:${user.name} | theme:${config.theme} | lang:${config.lang} `,
    );
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

loadFirstItem();
loadDashboard();
