const Post = require("../models/PostModel");
exports.addPostController = (req, res) => {
  const { title, desc, bookTitle, author, genre } = req.body;
  const genreArray = [];
  console.log(genre);
  for (let i in genre) {
    genreArray.push(genre[i].id);
  }
  console.log(genreArray);
  Post.create(
    {
      title,
      desc,
      user_id: String(req.user._id),
      bookTitle,
      author,
      genre_id: genreArray,
    },
    async (err, post) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "Invalid post data" });
      }
      return res.status(201).json({ message: "Post Added Successfuly" });
    }
  );
};
