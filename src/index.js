const express = require("express");
const path = require("path");
const app = express();

// const errorPage = `<h1>Avaliable pages:</h1><ul><li><a href="/bar">Bar</a></li><li><a href="/background">Background</a></li></ul>`;

// app.get("/", (req, res) => {
//   res.send(errorPage);
// });

// app.get("/:type", (req, res) => {
//   // Redirect to /bar/ to make sure the trailing slash is present
//   if (!req.path.endsWith("/")) {
//     return res.redirect(301, req.path.concat("/"));
//   }

//   const type = req.params.type;
//   if (type === "bar") {
//     res.send(bar.html());
//   } else if (type === "background") {
//     res.send(background.html());
//   } else {
//     res.send(errorPage);
//   }
// });

// app.get("/:type/style.css", (req, res) => {
//   res
//     .setHeader("Content-Type", "text/css")
//     .setHeader("Cache-Control", "public, max-age=31536000");

//   const type = req.params.type;
//   if (type === "bar") {
//     res.send(bar.css());
//   } else if (type === "background") {
//     res.send(background.css());
//   } else {
//     res.send("/* No styles for this type */");
//   }
// });

// app.get("/:type/script.js", (req, res) => {
//   res
//     .setHeader("Content-Type", "text/javascript")
//     .setHeader("Cache-Control", "public, max-age=31536000");

//   const type = req.params.type;
//   if (type === "bar") {
//     res.send(bar.js());
//   } else if (type === "background") {
//     res.send(background.js());
//   } else {
//     res.send("/* No scripts for this type */");
//   }
// });

app.use(express.static(path.join(__dirname, "pages")));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
