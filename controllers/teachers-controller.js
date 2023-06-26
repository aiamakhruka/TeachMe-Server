const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');


const getTeachers = (req, res) => {
  const { subject, experience, rating, level, price, city, province ,age } = req.query;

  console.log(req.body)
  let query = knex.from("teachers")
    .select(
      "teachers.teacher_id",
      "teachers.name",
      "teachers.age",
      "teachers.specialization",
      "teachers.teaching_level",
      "teachers.experience",
      "teachers.rating",
      "teachers.province",
      "teachers.city",
      "classes.class_type",
      "classes.price",
      "classes.class_name",
    )
    .join("classes", "teachers.teacher_id", "classes.teacher_id");

  if (subject && subject !== "subject") {
    query = query.where("teachers.specialization", subject);
  }

  if (experience && experience !== "Years of experience") {
    query = query.where("teachers.experience", ">=", experience);
  }

  if (rating && rating !== "0") {
    query = query.where("teachers.rating", ">=", rating);
  }
  if (age) {
    query = query.where("teachers.age", "<=", age);
  }
  


  if (province) {
    query = query.where("teachers.province", "like", `%${province}%`);
  }
  
  if (city) {
    query = query.where("teachers.city", "like", `%${city}%`);
  }
  
  
  if (level && level !== "university") {
    query = query.where("teachers.teaching_level", level);
  }

  if (price && price !== "0") {
    query = query.where("classes.price", "<=", price);
  }

  if (city && city !== "") {
    query = query.where("teachers.city", city);
  }

  if (province && province !== "") {
    query = query.where("teachers.province", province);
  }


  query
    .then((teachers) => {
      res.status(200).json(teachers);
      // console.log(teachers)
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to retrieve teachers data. Error: ${error}`,
      });
    });
};


const addTeacher = (req, res) => {

  // const teacherId = uuidv4(); // Generate a random ID using uuidv4()
  const rating = Math.floor(Math.random() * 5) + 1; // Generate a random rating from 1 to 5
  const { currentSignedUpTeacher,fullName, age, specialization, teachingLevel, yearsOfExperience, province, city ,price,teachingOption} = req.body;

  console.log(req.body)

  knex.transaction((trx) => {
 // Insert into teachers table
 trx("teachers")
 .insert({
  teacher_id:currentSignedUpTeacher ,
   name: fullName,
   age,
   specialization,
   teaching_level: teachingLevel,
   experience: yearsOfExperience,
   rating: rating,
   province,
   city,
 })

    .then((result) => {
              // Insert into other table

      return  trx("classes")
      .insert({
        // Other table columns and values
        teacher_id:currentSignedUpTeacher ,
      class_type: teachingOption,
      price: price,
      class_level: teachingLevel,
      class_name: specialization,
      })
      .then(trx.commit)
      .catch(trx.rollback);
        // .then((createdTeacher) => res.status(201).json(createdTeacher));
    })
    .then(() => {
      res.status(201).json({ message: "Data inserted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: `Unable to insert data: ${error}` });
    });
    });
};


module.exports = {
  getTeachers,

  addTeacher,
};
