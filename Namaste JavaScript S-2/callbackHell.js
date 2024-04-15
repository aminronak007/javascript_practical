// const cart = ["shoes", "pant", "kurta"];

// const createOrder = () => {
//   const proceedPayment = () => {
//     const showOrderSummary = () => {
//       const updateWallet = () => {
//         console.log("Wallet updated");
//       };
//       updateWallet();
//     };

//     showOrderSummary();
//   };

//   proceedPayment();
// };

// createOrder();

function fetchData() {
  let data = "Initial data";
  setTimeout(function () {
    data = "Updated data";
  }, 1000);
  return data;
}

console.log(fetchData());
