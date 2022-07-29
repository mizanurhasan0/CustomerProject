const Categories = require("../models/Categories");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const CategoriesCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Categories.find();
      return res.json({ categories });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createCategory: async (req, res) => {
    const { title, image } = req.body;
    if (!image) return res.status(400).json({ msg: "No image uploaded!" });
    try {
      let check = await Categories.findOne({ title: title.toLowerCase() });

      if (check) return res.status(400).json({ msg: "Existed category" });

      const category = new Categories({
        title: title.toLowerCase(),
        image,
      });

      await category.save();
      return res.json({ msg: "New category inserted." });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    const cat_Id = req.params.id;
    try {
      const data = await Categories.findByIdAndDelete(cat_Id);

      if (data !== null) {
        cloudinary.v2.uploader.destroy(
          data.image.public_id,
          async (err, result) => {
            if (err) throw err;
            return res.json({ msg: "Deleted!" });
          }
        );
      } else {
        return res.json({ msg: "Not found!" });
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  editCategory: async (req, res) => {
    const { _id, title, image } = req.body;

    if (title && image) {
      try {
        await Categories.findByIdAndUpdate(_id, { title, image });
        return res.json({ msg: "Updated!" });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    } else {
      return res.status(400).json({ msg: "Cannot updated!" });
    }
  },
};
module.exports = CategoriesCtrl;
