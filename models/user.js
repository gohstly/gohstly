const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  steamid: { type: String, required: true, unique: true },
  twitchname: { type: String, required: true, unique: true}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
