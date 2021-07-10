var express = require("express");
var fs = require("fs");
var request = require("request");
var router = express.Router();

router.get("/:url", function (req, res, next) {
  var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      console.log("content-type:", res.headers["content-type"]);
      console.log("content-length:", res.headers["content-length"]);

      request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
    });
  };
  console.log(req.params);
  download(req.params.url, "./images/hello.png", function () {
    console.log("done");
  });
  console.log("Hello World");
  res.send("download Finished");
});

module.exports = router;
