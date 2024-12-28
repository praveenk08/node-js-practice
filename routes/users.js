const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.get("/api/v1/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
})

router.get("/api/v1/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
}
)

router.post("/api/v1/users/register", async (req, res) => {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 12);
    const dbuser = await User.create(user);
    res.send(dbuser);
  }
)

router.post("/api/v1/users/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await User .findOne({  email: email });  
    if (!user) {
      return res.status(400).json({message:"Invalid email or password"});
    } 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({message:"Invalid email or password"});
    }
    
    const token = jwt.sign(
      { email : user.email,role:user.role}, 
      process.env.JWT_SECRET
    );
    return res.status(200).json({token:token,isValidPassword:isMatch,message:"Login successful"});
    // return res.json({token:token});
  }
)


module.exports = router;
