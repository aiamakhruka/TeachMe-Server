const router = require("express").Router();
const uploadImageController = require("../controllers/upload-image-controller");
const { upload } = require("../middleware/upload-middleware");

router
  .route("/")
  .get(uploadImageController.getImage)
  .post(upload.single('image'),uploadImageController.addImage);

module.exports = router;
