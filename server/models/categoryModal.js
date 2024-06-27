const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  workshops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workshop'
  }]
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
