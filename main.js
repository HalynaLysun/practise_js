// function fizzBuzz(figure) {
//   for (let i = 1; i <= figure; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

// //За допомогою циклу for додайте всі парні числа від min до max

// function sumNumber(min, max) {
//   let sum = 0;
//   for (let i = 0; i <= max; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sumNumber(2, 10));

// //Повернути об'єкт у якому вказується кількість тегів
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const status = tweets.flatMap((tweet) => {
  return tweet.tags;
});

const count = status.reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});
console.log(count);

// function countStatus() {
//   return tweets.reduce((count, tweet) => {
//     if (tweet.tags.includes("js")) {
//       count++
//     } else if (tweet.tags.includes("node.js")) {
//       count++;
//     }
//     return count;
//   }, 0);
// }

// console.log(countStatus());

// console.log(status);

// const statusCount = tweets.map((tweet) => ({
//   ...tweet,
//   tags: tweet.tags.length,
// }));

// console.log(statusCount);

// // function statusNumber(status) {
// //   status.reduce((arr, item) => {
// //     if (item === "js") {
// //       ({ ...arr, js: 1 });
// //       console.log(arr);
// //     }
// //   }, {});
// // }

// // statusNumber(status);

const buttonEl = document.querySelector("#passwordButton");
// const inputEl = document.querySelector("#passwordInput");

// function toHideText(event) {
//   if (inputEl.type === "text") {
//     inputEl.type = "password";
//     buttonEl.textContent = "Розкрити";
//   } else {
//     inputEl.type = "text";
//     buttonEl.textContent = "Приховати";
//   }
// }

// buttonEl.addEventListener("click", toHideText);

// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
// */

/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// import users from "./users.js";

// function getUserByGender(users, gender) {
//   users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//   }, []);
//   return acc;
// }

// console.log(getUserByGender(users, "male"));

const valiant = {
  name: "Halyna Lysun",
  showName() {
    console.log(`My name is ${this.name}`);
  },
};

valiant.showName.apply(valiant);

buttonEl.addEventListener("click", valiant.showName.bind(valiant));
