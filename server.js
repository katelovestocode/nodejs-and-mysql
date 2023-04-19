require("dotenv").config();

const express = require("express");
const app = express();

const postsRouter = require("./routes/postRoutes");

app.use(express.json());

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", postsRouter);

// Global Error Handler.
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  console.log(err.message);

  res.status(500).json({
    message: "Something went wrong",
  });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
