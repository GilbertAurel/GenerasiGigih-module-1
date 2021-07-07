const USER_DATA = [
  { name: "Jacky", age: 20 },
  { name: "Jean", age: 30 },
  { name: "Norris" },
];
const INIT_AGE = 20;
let totalAge = 0;
let TOKEN_KEY = "HELLO";

const table = document.getElementById("user-table");
const result = document.getElementById("result");

// Avg promise
const AvgPromiseHandler = (token) => {
  return new Promise((resolve, reject) => {
    console.log("checking token..");

    if (token !== TOKEN_KEY) {
      return reject(new Error("401: invalid token!"));
    }

    setTimeout(() => {
      console.log("token approved, initiating call..");
      return setTimeout(
        () =>
          resolve({
            res: 200,
            status: "OK",
            message: { data: averageAge },
          }),
        3000
      );
    }, 2000);
  });
};

// Set table data
USER_DATA.forEach((user) => {
  const name = document.createElement("p");
  const age = document.createElement("p");

  name.innerText = user.name;
  age.innerText = user.age ? user.age : INIT_AGE;

  table.append(name);
  table.append(age);

  totalAge += user.age ? user.age : INIT_AGE;
});

// Get user age summmary
const averageAge = totalAge / USER_DATA.length;

// Click button handler
const button = document.querySelector("button");
button.onclick = () => {
  AvgPromiseHandler("HELLO")
    .then((data) => {
      const { res, status, message } = data;
      console.log(`${res}: ${status}`);
      console.log(`avg age: ${message.data}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
