require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');

const app= express();

const PORT = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

mongoose.connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const coursesRouter = require("./routes/courses");
const usersRouter = require("./routes/users");

app.use(express.json());

app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
})

app.use(coursesRouter);
app.use(usersRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
})