const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  instructor: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;


