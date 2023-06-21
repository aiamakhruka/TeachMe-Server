// const { faker } = require('@faker-js/faker');

// exports.seed = function(knex) {
//     // Deletes ALL existing entries
//     return knex('students').del()
//       .then(function () {
//         // Inserts seed entries
//         let students = [];
//         for(let i = 26; i <= 50; i++){
//           students.push({
//             student_id: i,
//             name: faker.person.fullName(),
//             grade_level: `Grade ${faker.number.int({min:1, max:12})}`
//           });
//         }
//         return knex('students').insert(students);
//       });
//   };
 
// const { faker } = require('@faker-js/faker');
// // import { describe, it, expect } from 'vitest';
// // import { faker } from '@faker-js/faker/locale/en';

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('teachers').del()
//     .then(function () {
//       // Inserts seed entries
//       let teachers = [];
//       for(let i = 1; i <= 25; i++){
//         teachers.push({
//           student_id: i,
//           name: faker.person.fullName(),
//           age: faker.number.int({min:24, max:60}),
//           specialization: faker.person.jobTitle(),
//           experience: faker.number.int({min:1, max:20}),
//           rating: faker.number.int({min:1, max:5, precision: 0.1}),
//         //   latitude: faker.address.latitude(),
//         //   longitude: faker.address.longitude(),
//         //   city: faker.location.city(),
//           country: faker.location.country()
//         });
//       }
//       return knex('teachers').insert(teachers);
//     });
// };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("students").del();
    await knex("students").insert(
      [
        {
          student_id: 2,
          name: "Annette Prohaska",
          grade_level: "High School",
          province: "Ontario",
          city: "Toronto"
        },
        {
          student_id: 4,
          name: "Nora Braun",
          grade_level: "High School",
          province: "Quebec",
          city: "Montreal"
        },
        {
          student_id: 6,
          name: "Adam Pfannerstill",
          grade_level: "Elementary",
          province: "British Columbia",
          city: "Vancouver"
        },
        {
          student_id: 8,
          name: "Talia Kub",
          grade_level: "Elementary",
          province: "Alberta",
          city: "Calgary"
        },
        {
          student_id: 10,
          name: "Clara Parisian",
          grade_level: "Elementary",
          province: "Manitoba",
          city: "Winnipeg"
        },
        {
          student_id: 12,
          name: "Sophia Buckridge",
          grade_level: "High School",
          province: "Nova Scotia",
          city: "Halifax"
        },
        {
          student_id: 14,
          name: "Madelyn Zboncak",
          grade_level: "High School",
          province: "Saskatchewan",
          city: "Regina"
        },
        {
          student_id: 16,
          name: "Oliver Jaskolski",
          grade_level: "Middle School",
          province: "New Brunswick",
          city: "Fredericton"
        },
        {
          student_id: 18,
          name: "Henry Herzog",
          grade_level: "Middle School",
          province: "Newfoundland and Labrador",
          city: "St. John's"
        },
        {
          student_id: 20,
          name: "Daniel Baumbach",
          grade_level: "University",
          province: "Prince Edward Island",
          city: "Charlottetown"
        },
        {
          student_id: 22,
          name: "Logan Wisoky",
          grade_level: "Elementary",
          province: "Yukon",
          city: "Whitehorse"
        },
        {
          student_id: 24,
          name: "Benjamin Kovacek",
          grade_level: "Elementary",
          province: "Northwest Territories",
          city: "Yellowknife"
        },
        {
          student_id: 26,
          name: "Elijah Rath",
          grade_level: "University",
          province: "Nunavut",
          city: "Iqaluit"
        },
        {
          student_id: 28,
          name: "William Schaden",
          grade_level: "University",
          province: "Alberta",
          city: "Edmonton"
        },
        {
          student_id: 30,
          name: "Alexander Keeling",
          grade_level: "Middle School",
          province: "Saskatchewan",
          city: "Saskatoon"
        },
        {
          student_id: 32,
          name: "Charlotte Oberbrunner",
          grade_level: "Middle School",
          province: "Nova Scotia",
          city: "Dartmouth"
        },
        {
          student_id: 34,
          name: "Ava Treutel",
          grade_level: "Middle School",
          province: "Manitoba",
          city: "Brandon"
        },
        {
          student_id: 36,
          name: "Mila Feil",
          grade_level: "High School",
          province: "Quebec",
          city: "Quebec City"
        },
        {
          student_id: 38,
          name: "Harper Rippin",
          grade_level: "University",
          province: "British Columbia",
          city: "Victoria"
        },
        {
          student_id: 40,
          name: "Sebastian Larkin",
          grade_level: "University",
          province: "Alberta",
          city: "Lethbridge"
        },
        {
          student_id: 42,
          name: "Aria Huel",
          grade_level: "Elementary",
          province: "Manitoba",
          city: "Steinbach"
        },
        {
          student_id: 44,
          name: "Scarlet Gaylord",
          grade_level: "High School",
          province: "Quebec",
          city: "Sherbrooke"
        },
        {
          student_id: 46,
          name: "Grace Kihn",
          grade_level: "Elementary",
          province: "Nova Scotia",
          city: "Sydney"
        },
        {
          student_id: 48,
          name: "Chloe Emard",
          grade_level: "Elementary",
          province: "Saskatchewan",
          city: "Moose Jaw"
        },
        {
          student_id: 50,
          name: "Sophia Braun",
          grade_level: "University",
          province: "British Columbia",
          city: "Kelowna"
        }
      ]
      
      );
  };