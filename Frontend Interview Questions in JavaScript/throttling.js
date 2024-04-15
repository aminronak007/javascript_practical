const expensive = () => {
  console.log("Expensive");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 900);

window.addEventListener("resize", betterExpensive);
