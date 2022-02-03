const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
  {
    urlId: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', UrlSchema);
