const express = require("express");
const cors = require("cors");
const clientRoute = require("./routes/clientRoute");
const mongoose = require("mongoose");

const PORT = 5555;
const url = "mongodb://127.0.0.1:27017/medichain";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the App");
});

app.use("/", clientRoute);

mongoose
  .connect(url)
  .then(() => {
    console.log("App connected to Database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
