const newman = require("newman");
require("dotenv").config();
newman.run(
  {
    collection: `https://api.postman.com/collections/28923318-74772385-7959-4075-a525-50269c73250a?access_key=${process.env.secret_key}`,
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete");
  }
);