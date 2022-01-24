const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  location: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  fav_genre: [
    type: Schema.Types.ObjectId,
    ref: "Genre"
  ]
  },
  points: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", ProfileSchema);
module.exports = User;
