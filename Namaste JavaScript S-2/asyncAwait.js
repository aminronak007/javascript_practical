// Real World Example
async function getData() {
  //   try {
  const data = await fetch("https://api.github.in.com/users/aminronak007", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userData = await data.json();

  console.log(userData);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
}

getData().catch((err) => console.log(err.message));
