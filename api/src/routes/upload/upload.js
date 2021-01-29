const express = require("express");
const router = express.Router();
const csvUpload = require("../../../multer");
const csv = require("csv-parser");
const fs = require("fs");

router.post("/users", csvUpload, (req, res, next) => {
  console.log(req.file);
  const users = [];
  const filePath = req.file.path;
  // Parsing csv data.
  fs.createReadStream(filePath)
    .pipe(csv({}))
    .on("data", (data) => users.push(data))
    .on("end", () => {
      // Check if csv has email and github username.
      const hasEmail = users[0].hasOwnProperty("email");
      const hasGithub = users[0].hasOwnProperty("githubUsername");
      const validObj = hasEmail && hasGithub;
      if (validObj) {

        return res.send("ok");
      } else {
        // Remove csv, and return an bad req response.
        fs.unlink(filePath, () => {
          return res.status(400).json({
            msg: `Error: Missing csv data. Add${!hasEmail ? " email" : ""} ${!hasGithub ? "githubUsername " : ""}colums.`,
          });
        });
      }
    });
});

module.exports = router;

router.post;
