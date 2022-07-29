require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const Users = require("./models/Users");
const CategoryRouter = require("./routers/CategoryRouter");
const ImgUploadRoute = require("./routers/ImageUpload");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

mongoose.connect(
  process.env.HOST,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) return error;
    console.log("Connection established");
  }
);
const db = mongoose.connection;

db.once("open", async () => {
  if ((await Users.countDocuments().exec()) > 0) return;

  Promise.all([
    Users.create({ name: "user 01" }),
    Users.create({ name: "user 02" }),
    Users.create({ name: "user 03" }),
    Users.create({ name: "user 04" }),
    Users.create({ name: "user 05" }),
  ]);
});

// app.get("/user", (req, res) => {
//   res.json("User ");
// });
app.use("/category", CategoryRouter);
app.use("/img", ImgUploadRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Running PORT:" + process.env.PORT);
});
