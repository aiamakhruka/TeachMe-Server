// const { faker } = require('@faker-js/faker');

//  exports.seed = function(knex) {
//     // Deletes ALL existing entries
//     return knex('enrollment').del()
//       .then(function () {
//         // Inserts seed entries
//         let enrollments = [];
//         for(let i = 1; i <= 25; i++){
//           enrollments.push({
//             id: i,
//             user_id: i + 25,
//             class_id: i
//           });
//         }
//         return knex('enrollment').insert(enrollments);
//       });
//   };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("enrollment").del();
  await knex("enrollment").insert(
    [
      {
        student_id: 2,
        class_id: 25
      },
      {
        student_id: 2,
        class_id: 22
      },
      {
        student_id: 4,
        class_id: 1
      },
      {
        student_id: 6,
        class_id: 2
      },
      {
        student_id: 8,
        class_id: 2
      },
      {
        student_id: 10,
        class_id: 2
      },
      {
        student_id: 12,
        class_id: 1
      },
      {
        student_id: 14,
        class_id: 1
      },
      {
        student_id: 16,
        class_id: 4
      },
      {
        student_id: 18,
        class_id: 4
      },
      {
        student_id: 20,
        class_id: 3
      },
      {
        student_id: 22,
        class_id: 2
      },
      {
        student_id: 24,
        class_id: 4
      },
      {
        student_id: 26,
        class_id: 3
      },
      {
        student_id: 28,
        class_id: 3
      },
      {
        student_id: 30,
        class_id: 4
      },
      {
        student_id: 32,
        class_id: 4
      },
      {
        student_id: 34,
        class_id: 4
      },
      {
        student_id: 36,
        class_id: 1
      },
      {
        student_id: 38,
        class_id: 3
      },
      {
        student_id: 40,
        class_id: 3
      },
      {
        student_id: 42,
        class_id: 2
      },
      {
        student_id: 44,
        class_id: 1
      },
      {
        student_id: 46,
        class_id: 2
      },
      {
        student_id: 48,
        class_id: 2
      },
      {
        student_id: 50,
        class_id: 3
      }
    ]       
  );
};

  