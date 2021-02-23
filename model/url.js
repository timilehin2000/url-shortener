const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  longUrl: {
    type: String,
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
