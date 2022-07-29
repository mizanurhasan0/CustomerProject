const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
    },
    image: {
      type: Object,
      required: true,
    },
    products: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Categories", categorySchema);
