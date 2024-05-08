const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// const dboptions = { useNewUrlParser: true, useUnifiedTopology: true };
const port = process.env.PORT || 4000;
// mongoose.connect(process.env.DB_URI, dboptions);

// then(() => console.log("Database connected :")).catch((err) =>
//   console.log(err)
// );

// app.get("/hello", (req, res) => {
//   res.send("Hello, World!");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
