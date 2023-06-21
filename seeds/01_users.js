// const { faker } = require("@faker-js/faker");

// // seeds/01_users.js
// exports.seed = function (knex) {

//   // Generate names
//   let names = [];
//   for (let i = 0; i < 50; i++) {
//     names.push(faker.person.fullName());
//   }
//   // Deletes ALL existing entries
//   return knex("enrollment")
//     .del()
//     .then(() => knex("classes").del())
//     .then(() => knex("students").del())
//     .then(() => knex("teachers").del())
//     .then(() => knex("users").del())
//     .then(function () {
//       // Inserts seed entries
//       let users = [];
//       for (let i = 1; i <= 50; i++) {
//         users.push({
//           id: i,
//           username: `${names[i]}${faker.number.int({min:0, max:100})}`,
//           password: faker.internet.password(),
//           email: `${names[i]}@gmail.com`,
//           role: i <= 25 ? "teacher" : "student",
//         });
//       }
//       return knex("users").insert(users);
//     });
// };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "Hazel Bartell34",
      password: "8s9C9y4ahxNTXuZ",
      email: "hazel.bartell@hotmail.com",
      role: "teacher",
    },
    {
      id: 2,
      username: "Annette Prohaska78",
      password: "9jWadXa7ykEb0mv",
      email: "annette.prohaska78@hotmail.com",
      role: "student",
    },
    {
      id: 3,
      username: "Caleb Kuhn62",
      password: "4pW6vZ1aD3gH5cN",
      email: "caleb.kuhn62@hotmail.com",
      role: "teacher",
    },
    {
      id: 4,
      username: "Nora Braun17",
      password: "7mT9jG1fX5cV3bL",
      email: "nora.braun17@hotmail.com",
      role: "student",
    },
    {
      id: 5,
      username: "Zara Runolfsdottir42",
      password: "2sE6gF7rP1vH3nW",
      email: "zara.runolfsdottir42@hotmail.com",
      role: "teacher",
    },
    {
      id: 6,
      username: "Adam Pfannerstill55",
      password: "9uY1bD3gS5hX7cM",
      email: "adam.pfannerstill55@hotmail.com",
      role: "student",
    },
    {
      id: 7,
      username: "Nadia Sporer24",
      password: "3jK9cD7bG5vF1rH",
      email: "nadia.sporer24@hotmail.com",
      role: "teacher",
    },
    {
      id: 8,
      username: "Talia Kub38",
      password: "7sJ9nW6eB4hC2tV",
      email: "talia.kub38@hotmail.com",
      role: "student",
    },
    {
      id: 9,
      username: "Emilio Effertz83",
      password: "1rK9jS5mX3gH7bC",
      email: "emilio.effertz83@hotmail.com",
      role: "teacher",
    },
    {
      id: 10,
      username: "Clara Parisian18",
      password: "6qF4dR7bV1nM3cX",
      email: "clara.parisian18@hotmail.com",
      role: "student",
    },
    {
      id: 11,
      username: "Leo Schneider77",
      password: "1nM5xG3hD9bC7vQ",
      email: "leo.schneider77@hotmail.com",
      role: "teacher",
    },
    {
      id: 12,
      username: "Sophia Buckridge22",
      password: "3zJ5mC6bW8vP1qR",
      email: "sophia.buckridge22@hotmail.com",
      role: "student",
    },
    {
      id: 13,
      username: "Ethan Boyle60",
      password: "9xH6nC7vB1gJ3mD",
      email: "ethan.boyle60@hotmail.com",
      role: "teacher",
    },
    {
      id: 14,
      username: "Madelyn Zboncak15",
      password: "7rE9hT4yX3aK2cV",
      email: "madelyn.zboncak15@hotmail.com",
      role: "student",
    },
    {
      id: 15,
      username: "Ella Rodriguez81",
      password: "5kN7jT2xG4bP9cV",
      email: "ella.rodriguez81@hotmail.com",
      role: "teacher",
    },
    {
      id: 16,
      username: "Oliver Jaskolski71",
      password: "3zK9xN7bR5vT1mC",
      email: "oliver.jaskolski71@hotmail.com",
      role: "student",
    },
    {
      id: 17,
      username: "Mia Kulas56",
      password: "7rS4gB9nM3vC1bL",
      email: "mia.kulas56@hotmail.com",
      role: "teacher",
    },
    {
      id: 18,
      username: "Henry Herzog46",
      password: "9jK3mG7rD5fN1zV",
      email: "henry.herzog46@hotmail.com",
      role: "student",
    },
    {
      id: 19,
      username: "Scarlett Mann28",
      password: "2zQ4dW8cF7gR1vT",
      email: "scarlett.mann28@hotmail.com",
      role: "teacher",
    },
    {
      id: 20,
      username: "Daniel Baumbach49",
      password: "6xV2nC3bJ4mW8rG",
      email: "daniel.baumbach49@hotmail.com",
      role: "student",
    },
    {
      id: 21,
      username: "Amelia Hammes86",
      password: "1xK5dC3vR4bM2jG",
      email: "amelia.hammes86@hotmail.com",
      role: "teacher",
    },
    {
      id: 22,
      username: "Logan Wisoky75",
      password: "6wV4bN1mR3cT8jK",
      email: "logan.wisoky75@hotmail.com",
      role: "student",
    },
    {
      id: 23,
      username: "Abigail Swift90",
      password: "9fA2bW3vK7nH1rG",
      email: "abigail.swift90@hotmail.com",
      role: "teacher",
    },
    {
      id: 24,
      username: "Benjamin Kovacek40",
      password: "7uX9fR3bM1gS5cD",
      email: "benjamin.kovacek40@hotmail.com",
      role: "student",
    },
    {
      id: 25,
      username: "Emily Powlowski13",
      password: "3nM5hD2bW7xR1vT",
      email: "emily.powlowski13@hotmail.com",
      role: "teacher",
    },
    {
      id: 26,
      username: "Elijah Rath34",
      password: "1hA9rB4sW8gN2cV",
      email: "elijah.rath34@hotmail.com",
      role: "student",
    },
    {
      id: 27,
      username: "Evelyn Stracke19",
      password: "5kX3cD7vB1mR9jN",
      email: "evelyn.stracke19@hotmail.com",
      role: "teacher",
    },
    {
      id: 28,
      username: "William Schaden72",
      password: "4nG6bR7xV3jK1cT",
      email: "william.schaden72@hotmail.com",
      role: "student",
    },
    {
      id: 29,
      username: "Sofia Lowe87",
      password: "9xK1mB3nC7gV4jR",
      email: "sofia.lowe87@hotmail.com",
      role: "teacher",
    },
    {
      id: 30,
      username: "Alexander Keeling80",
      password: "3tW4bR5vC1hJ9nG",
      email: "alexander.keeling80@hotmail.com",
      role: "student",
    },
    {
      id: 31,
      username: "Avery Nikolaus44",
      password: "7gF5nM3bC8vR2jK",
      email: "avery.nikolaus44@hotmail.com",
      role: "teacher",
    },
    {
      id: 32,
      username: "Charlotte Oberbrunner97",
      password: "2hF8mD4gR1bC3vN",
      email: "charlotte.oberbrunner97@hotmail.com",
      role: "student",
    },
    {
      id: 33,
      username: "Liam Wuckert89",
      password: "4qG7nC8xM2vD1bW",
      email: "liam.wuckert89@hotmail.com",
      role: "teacher",
    },
    {
      id: 34,
      username: "Ava Treutel74",
      password: "6rB2cV9jN5mX8zD",
      email: "ava.treutel74@hotmail.com",
      role: "student",
    },
    {
      id: 35,
      username: "James Gerhold31",
      password: "3hF1vR2mW6cD9nG",
      email: "james.gerhold31@hotmail.com",
      role: "teacher",
    },
    {
      id: 36,
      username: "Mila Feil54",
      password: "8bT6vR7nJ3cG5mF",
      email: "mila.feil54@hotmail.com",
      role: "student",
    },
    {
      id: 37,
      username: "Lucas Schoen91",
      password: "3nG5bV9mF7rW1cD",
      email: "lucas.schoen91@hotmail.com",
      role: "teacher",
    },
    {
      id: 38,
      username: "Harper Rippin66",
      password: "2rM9bD4xW6jC7vN",
      email: "harper.rippin66@hotmail.com",
      role: "student",
    },
    {
      id: 39,
      username: "Michaela Robel47",
      password: "5wX9zD1bC7nJ4mV",
      email: "michaela.robel47@hotmail.com",
      role: "teacher",
    },
    {
      id: 40,
      username: "Sebastian Larkin12",
      password: "1rG9bT3vN5jC7mX",
      email: "sebastian.larkin12@hotmail.com",
      role: "student",
    },
    {
      id: 41,
      username: "Riley Spinka23",
      password: "4vN7gH5bJ2cD9xR",
      email: "riley.spinka23@hotmail.com",
      role: "teacher",
    },
    {
      id: 42,
      username: "Aria Huel59",
      password: "6mF9cB3vN5jW7gX",
      email: "aria.huel59@hotmail.com",
      role: "student",
    },
    {
      id: 43,
      username: "Jackson Haag20",
      password: "3bG9xJ4nM1cD5vW",
      email: "jackson.haag20@hotmail.com",
      role: "teacher",
    },
    {
      id: 44,
      username: "Scarlet Gaylord67",
      password: "1kS9cM4xV8nD7gJ",
      email: "scarlet.gaylord67@hotmail.com",
      role: "student",
    },
    {
      id: 45,
      username: "Levi Batz93",
      password: "6tB7gN5vC9jM1xV",
      email: "levi.batz93@hotmail.com",
      role: "teacher",
    },
    {
      id: 46,
      username: "Grace Kihn82",
      password: "2fH3nB7gD5jC8vM",
      email: "grace.kihn82@hotmail.com",
      role: "student",
    },
    {
      id: 47,
      username: "Lucas Homenick83",
      password: "4wQ9gV6jB1nD7mC",
      email: "lucas.homenick83@hotmail.com",
      role: "teacher",
    },
    {
      id: 48,
      username: "Chloe Emard11",
      password: "7zQ4vB1nJ3gW5mC",
      email: "chloe.emard11@hotmail.com",
      role: "student",
    },
    {
      id: 49,
      username: "Henry Swaniawski14",
      password: "8rV7jN3bM2cD4gW",
      email: "henry.swaniawski14@hotmail.com",
      role: "teacher",
    },
    {
      id: 50,
      username: "Sophia Braun16",
      password: "6zX4bN7mC3vD9jG",
      email: "sophia.braun16@hotmail.com",
      role: "student",
    },
  ]);
};