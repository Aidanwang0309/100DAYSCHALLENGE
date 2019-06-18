const express = require("express");
// const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const app = express();

// DB Config
const db = require("./config/keys").MongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

//ejs
// app.use(expressLayout);
// app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
