const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre_id: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
