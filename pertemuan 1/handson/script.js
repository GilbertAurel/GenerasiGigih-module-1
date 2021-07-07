const USER_DATA = [
  { name: "Jacky", age: 20 },
  { name: "Jean", age: 30 },
  { name: "Norris" },
];

const INIT_AGE = 20;

let totalAge = 0;

// Set user table data
const table = document.getElementById("user-table");

USER_DATA.forEach((user) => {
  const name = document.createElement("p");
  const age = document.createElement("p");

  name.innerText = user.name;
  age.innerText = user.age ? user.age : INIT_AGE;

  table.append(name);
  table.append(age);

  totalAge += user.age ? user.age : INIT_AGE;
});

// Get user age summmary (avg, total)
const result = document.getElementById("result");
const averageAge = totalAge / USER_DATA.length;

const button = document.querySelector("button");
button.onclick = () => {
  console.log(averageAge);
  result.innerText = `Avg: ${averageAge}`;
};
