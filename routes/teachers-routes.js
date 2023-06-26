const router = require("express").Router();
const teachersController = require("../controllers/teachers-controller");

router
  .route("/")
  .get(teachersController.getTeachers)
  .post( teachersController.addTeacher);


module.exports = router;
