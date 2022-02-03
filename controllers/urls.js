const Url = require('../models/Url');
const utils = require('../utils/utils');

async function uploadUrl(req, res) {
  const base = process.env.BASE;
  const { longUrl } = req.body;
  const urlId = utils.generateRandomUrl(8);

  if (utils.validateUrl(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          longUrl,
          shortUrl,
          urlId,
        });

        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Server error');
    }
  } else {
    res.status(400).json('The url is invalid');
  }
}

async function redirectUrl(req, res) {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      res.status(404).json('Not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error');
  }
}

module.exports = { uploadUrl, redirectUrl };
