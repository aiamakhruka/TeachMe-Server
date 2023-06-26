const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router
  .route("/")
  .post(usersController.addUser);
router
  .route("/login")
  .post(usersController.findUser);


module.exports = router;
