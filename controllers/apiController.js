const Post = require("../models/PostModel");

exports.addPostController = (req, res) => {
  const { title, desc, bookTitle, author, genre } = req.body;

  const imageUri = req.file.filename;
  const genreArray = [];
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
      imageUri,
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
const genreList = [
  { id: "61f0132429cbf76c5b4c7ebf", text: "Adult Fiction" },
  { id: "61f0133329cbf76c5b4c7ec0", text: "Horror" },
  { id: "61f0133f29cbf76c5b4c7ec1", text: "Fiction" },
  { id: "61f0134629cbf76c5b4c7ec2", text: "Fantasy" },
  { id: "61f0134d29cbf76c5b4c7ec3", text: "Mystery" },
  { id: "61f0135529cbf76c5b4c7ec4", text: "Politics" },
  { id: "61f0135c29cbf76c5b4c7ec5", text: "Science Fiction" },
  { id: "61f0136329cbf76c5b4c7ec6", text: "Thriller" },
  { id: "61f0136b29cbf76c5b4c7ec7", text: "War" },
  { id: "61f0137329cbf76c5b4c7ec8", text: "Art" },
  { id: "61f0137929cbf76c5b4c7ec9", text: "Biography" },
  { id: "61f0138029cbf76c5b4c7eca", text: "Business" },
  { id: "61f0138829cbf76c5b4c7ecb", text: "Classics" },
  { id: "61f0138f29cbf76c5b4c7ecc", text: "Comics" },
  { id: "61f0139529cbf76c5b4c7ecd", text: "Contemporary" },
  { id: "61f013a029cbf76c5b4c7ece", text: "Cookbooks" },
  { id: "61f013a629cbf76c5b4c7ecf", text: "Crime" },
  { id: "61f013ad29cbf76c5b4c7ed0", text: "History" },
  { id: "61f013b629cbf76c5b4c7ed1", text: "Humor and Comedy" },
  { id: "61f013c129cbf76c5b4c7ed2", text: "Memoir" },
];
exports.fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }).lean();
    for (let i in posts) {
      let genreArr = [];
      posts[i].genre_id.map((genre) => {
        genreArr.push(genreList.filter((gen) => gen.id == genre)[0]);
      });
      posts[i] = {
        ...posts[i],
        genArr: genreArr,
      };
    }
    return res.status(201).send(posts);
  } catch (err) {
    return res.status(404).json({ message: "No Post Found" });
  }
};

exports.fetchPost = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await Post.findById(id).lean();
    if (post) {
      let genreArr = [];
      post.genre_id.map((genre) => {
        genreArr.push(genreList.filter((gen) => gen.id == genre)[0]);
      });

      post.genArr = genreArr;
      return res.status(201).send(post);
    } else {
      return res.status(404).json({ message: "Post not Found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Some Error Occured" });
  }
};
