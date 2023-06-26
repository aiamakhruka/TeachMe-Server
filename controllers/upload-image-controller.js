const knex = require("knex")(require("../knexfile"));

const getImage = (_req, res) => {
  knex
    .from("teachers")
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
    .join("classes", "teachers.teacher_id", "classes.teacher_id")
    .then((show) => {
      res.status(200).json(show);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to retrieve teachers data. Error: ${error}`,
      });
    });
};

const addImage = (req, res) => {
    if (req.file) {
      console.log(req.file);
      res.status(201).json("Image got uploaded");
    } else {
      res.status(400).json("No image received");
    }
  };
  


module.exports = {
    getImage,

  addImage,
};
