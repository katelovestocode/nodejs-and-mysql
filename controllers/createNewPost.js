const db = require("../config/db");

const createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;

    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO posts(title, body, created_at)
    VALUES('${title}', '${body}', '${createdAtDate}')`;

    const [newPost, _] = await db.execute(sql);
    console.log(newPost);

    res.status(201).json({
      status: "success",
      code: 201,
      result: newPost,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createNewPost;
