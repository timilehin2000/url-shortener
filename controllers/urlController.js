const express = require("express");
const { v4: uuidv4 } = require("uuid");
const validUrl = require("valid-url");
const Url = require("../model/url");

exports.shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;

  const baseUrl = process.env.BASE_URL;
  if (!validUrl.isUri(baseUrl)) {
    res.status(200).send("Internal error");
  }
  const urlCode = uuidv4();

  if (validUrl.isUri(longUrl)) {
    try {
      const findUrl = await Url.findOne({ longUrl: longUrl });
      if (findUrl) {
        res.status(200).json(findUrl);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        const url = new Url({
          longUrl,
          shortUrl,
          clickCount: 0,
          urlCode,
        });

        await url.save();
        return res.status(200).send(url);
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "an error occured" });
    }
  } else {
    res.status(400).send("Invalid Url, please input a valid one");
  }
};

exports.getShortenedUrl = async (req, res) => {
  const shortUrlCode = req.params.shortUrl;
  const findUrl = await Url.findOne({ urlCode: shortUrlCode });
  try {
    if (findUrl) {
      let clickCount = findUrl.clickCount;
      if (clickCount >= process.env.ALLOWED_CLICKS) {
        console.log(
          "The click count for shortcode " +
            shortUrlCode +
            " has passed the limit of " +
            process.env.ALLOWED_CLICKS
        );

        return res
          .status(400)
          .send(
            "The click count for shortcode " +
              shortUrlCode +
              " has passed the limit of " +
              process.env.ALLOWED_CLICKS
          );
      }

      clickCount++;
      await findUrl.update({ clickCount });
      return res.redirect(findUrl.longUrl);
    } else {
      return res
        .status(400)
        .json("The short url doesn't exists in our system.");
    }
  } catch (err) {
    console.log(err);
    Console.error(
      "Error while retrieving long url for shorturlcode " + shortUrlCode
    );
    return res.status(500).json("There is some internal error.");
  }
};
