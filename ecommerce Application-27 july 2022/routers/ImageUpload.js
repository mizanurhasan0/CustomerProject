const ImageUploadCtrl = require("../controller/ImageUploadCtrl");

const router = require("express").Router();

router.post("/", ImageUploadCtrl.uploadImage);
router.post("/delete", ImageUploadCtrl.deleteImage);

module.exports = router;
