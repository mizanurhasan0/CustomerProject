const router = require("express").Router();
const CategoriesCtrl = require("../controller/CategoriesCtrl");

router
  .route("/")
  .get(CategoriesCtrl.getCategories)
  .post(CategoriesCtrl.createCategory)
  .put(CategoriesCtrl.editCategory);

router.delete("/:id", CategoriesCtrl.deleteCategory);

module.exports = router;
