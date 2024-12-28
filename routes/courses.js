const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Course = require("../models/courses");

const veryfyToken = (req, res, next) => {
  // const token = req.headers.authorization;
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({message:"Access denied"});
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    console.log(decodedToken);
    return next();
  } catch (error) {
    return res.status(400).json({message:"Invalid token"});
  }
}

router.use(veryfyToken);

const coursesList = async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
}

router.get("/api/v1/courses", coursesList)

router.get("/api/v1/courses/:id", async (req, res) => {
  const id = req.params.id;
  const course = await Course.findById(id);
  return res.status(200).json({message:"Course",course});
})

router.post("/api/v1/courses", async (req, res) => {
  if (req.user && req.user.role === "admin") {
      const course = req.body;
      const dbcourse =await Course.create(course);
      // res.send(dbcourse);
      return res.status(200).json({message:"Access denied or Unauthorized",dbcourse});
    }
    else {
      return res.status(401).json({message:"Access denied or Unauthorized"});
    }
  }
)

module.exports = router;