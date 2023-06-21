// const { faker } = require('@faker-js/faker');

// exports.seed = function(knex) {
//     // Deletes ALL existing entries
//     return knex('classes').del()
//       .then(function () {
//         // Inserts seed entries
//         let classes = [];
//         for(let i = 1; i <= 25; i++){
//           classes.push({
//             id: i,
//             class_name: `Class ${i}`,
//             // description: faker.lorem.paragraph(),
//             price: faker.commerce.price({ min: 100, max: 200, dec: 0}),
//             class_type: faker.helpers.arrayElement(['online', 'offline']),
//             user_id: i
//           });
//         }
//         return knex('classes').insert(classes);
//       });
//   };
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("classes").del();
  await knex("classes").insert(
    [
        {
          id: 1,
          class_name: "Math",
          class_level: "High School",
          price: 85,
          class_type: "Online",
          teacher_id: 1
        },
        {
          id: 2,
          class_name: "Biology",
          class_level: "Elementary",
          price: 39,
          class_type: "In Person",
          teacher_id: 3
        },
        {
          id: 3,
          class_name: "Computer Science",
          class_level: "University",
          price: 63,
          class_type: "Online",
          teacher_id: 5
        },
        {
          id: 4,
          class_name: "Physics",
          class_level: "Middle School",
          price: 73,
          class_type: "Online",
          teacher_id: 7
        },
        {
          id: 5,
          class_name: "Chemistry",
          class_level: "High School",
          price: 36,
          class_type: "In Person",
          teacher_id: 9
        },
        {
          id: 6,
          class_name: "English",
          class_level: "University",
          price: 91,
          class_type: "Online",
          teacher_id: 11
        },
        {
          id: 7,
          class_name: "History",
          class_level: "High School",
          price: 54,
          class_type: "In Person",
          teacher_id: 13
        },
        {
          id: 8,
          class_name: "Geography",
          class_level: "Middle School",
          price: 76,
          class_type: "Online",
          teacher_id: 15
        },
        {
          id: 9,
          class_name: "French",
          class_level: "High School",
          price: 42,
          class_type: "In Person",
          teacher_id: 17
        },
        {
          id: 10,
          class_name: "Chemistry",
          class_level: "University",
          price: 69,
          class_type: "Online",
          teacher_id: 19
        },
        {
          id: 11,
          class_name: "Computer Science",
          class_level: "University",
          price: 95,
          class_type: "Online",
          teacher_id: 21
        },
        {
          id: 12,
          class_name: "Math",
          class_level: "High School",
          price: 38,
          class_type: "In Person",
          teacher_id: 23
        },
        {
          id: 13,
          class_name: "English",
          class_level: "University",
          price: 66,
          class_type: "Online",
          teacher_id: 25
        },
        {
          id: 14,
          class_name: "Chemistry",
          class_level: "Middle School",
          price: 44,
          class_type: "In Person",
          teacher_id: 27
        },
        {
          id: 15,
          class_name: "Biology",
          class_level: "High School",
          price: 80,
          class_type: "Online",
          teacher_id: 29
        },
        {
          id: 16,
          class_name: "Physics",
          class_level: "Middle School",
          price: 53,
          class_type: "Online",
          teacher_id: 31
        },
        {
          id: 17,
          class_name: "History",
          class_level: "High School",
          price: 39,
          class_type: "In Person",
          teacher_id: 33
        },
        {
          id: 18,
          class_name: "Geography",
          class_level: "Middle School",
          price: 76,
          class_type: "Online",
          teacher_id: 35
        },
        {
          id: 19,
          class_name: "French",
          class_level: "High School",
          price: 55,
          class_type: "In Person",
          teacher_id: 37
        },
        {
          id: 20,
          class_name: "Chemistry",
          class_level: "University",
          price: 83,
          class_type: "Online",
          teacher_id: 39
        },
        {
          id: 21,
          class_name: "English",
          class_level: "University",
          price: 60,
          class_type: "Online",
          teacher_id: 41
        },
        {
          id: 22,
          class_name: "Math",
          class_level: "High School",
          price: 41,
          class_type: "In Person",
          teacher_id: 43
        },
        {
          id: 23,
          class_name: "Biology",
          class_level: "Elementary",
          price: 93,
          class_type: "Online",
          teacher_id: 45
        },
        {
          id: 24,
          class_name: "Physics",
          class_level: "Middle School",
          price: 64,
          class_type: "Online",
          teacher_id: 47
        },
        {
          id: 25,
          class_name: "History",
          class_level: "High School",
          price: 45,
          class_type: "In Person",
          teacher_id: 49
        }
      ]      
  );
};
