let counter = 0;
const getData = () => {
  // Calls an API and gets Data
  let search = document.getElementById("search").value;
  if (search) {
    console.log("Fetching Data", counter++);
  }
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
