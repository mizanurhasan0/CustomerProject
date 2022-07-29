const Products = require("../models/Products");

const ProductsCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      return res.json({ products });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        image,
        category,
      } = req.body;
      if (!image) return res.status(400).json({ msg: "No image selected!" });
      const check = await Products.findOne(product_id);
      if (check) return res.status(400).json({ msg: "Product already exist!" });
      const product = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        image,
        category,
      });
      await product.save();
      return res.json({ msg: "Add product" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
module.export = ProductsCtrl;
