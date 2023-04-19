const db = require("../config/db");

const getAllPosts = async (req, res, next) => {
  try {
    let sql = `SELECT * FROM posts`;

    const [getAll, _] = await db.execute(sql);

    res.json({
      status: "success",
      code: 200,
      count: getAll.length,
      getAll,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllPosts;
