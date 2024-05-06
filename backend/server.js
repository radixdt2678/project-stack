const express = require("express");
const app = express();
const port = 3000; // You can change the port number if needed
// Route handler for the /hello endpoint

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

// Start the server

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
