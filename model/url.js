const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  longUrl: {
    type: String,
    required: [true, "Please provide a url"],
  },
  shortUrl: {
    type: String,
  },
  clickCount: {
    type: Number,
  },
  urlCode: {
    type: String,
  },
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
