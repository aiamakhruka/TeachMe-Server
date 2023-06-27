const router = require("express").Router();
const teachersController = require("../controllers/teachers-controller");

router
  .route("/")
  .get(teachersController.getTeachers)
  .post(teachersController.addTeacher);
router
  .route("/:id")
  .get(teachersController.GetTeacherprofile); // call GetTeacherprofile here

module.exports = router;
