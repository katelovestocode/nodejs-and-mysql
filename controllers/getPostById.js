const db = require("../config/db");

const getPostById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const sql = `SELECT * FROM posts WHERE id=${id}`;
    const [postByID, _] = await db.execute(sql);

    if (!id) {
      throw new createError.NotFound(`Post with this id: ${id} is not found`);
    }
    res.json({
      status: "success",
      code: 200,
      result: postByID[0],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPostById;
