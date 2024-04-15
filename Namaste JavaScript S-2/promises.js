const cart = ["shoes", "pant", "kurta"];

createOrder(cart)
  .then((orderId) => {
    console.log("orderId", orderId);
    return orderId;
  })
  .catch((err) => console.log(err.message))
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((payInfo) => {
    console.log(payInfo);
    return showOrderSummary();
  })
  .then((orderSummary) => {
    console.log(orderSummary);
    return updateWallet();
  })
  .then((updateBalance) => console.log(updateBalance))
  .catch((err) => console.log(err.message))
  .then(() =>
    console.log("No matter whatever happens, I will definitely called.")
  )
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 1000);
    }
  });

  return promise;
}

function proceedToPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment Successful");
    }, 1000);
  });
}

function showOrderSummary() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Summary");
    }, 1000);
  });
}

function updateWallet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wallet Updated");
    }, 1000);
  });
}

function validateCart(cart) {
  return false;
}
