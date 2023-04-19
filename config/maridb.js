// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.static("public"));
// const formatsLogger = app.get("env") === "development" ? "dev" : "short";
// app.use(logger(formatsLogger));

// const mariadb = require("mariadb");
// const pool = mariadb.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: "",
//   database: "nodejs_test",
//   connectionLimit: 5,
// });
// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query("SELECT * from users");
//     console.log(rows);
//     // const res = await conn.query(
//     //   "INSERT INTO users (firstName, lastName, email) VALUES ('Moysha', 'Senya', 'moyshaSenya@test.com')",
//     //   [1, "mariadb"]
//     // );

//     console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//     console.log(rows);
//   } catch (err) {
//     throw err;
//   } finally {
//     if (conn) return conn.end();
//   }
// }
// asyncFunction();
// module.exports = app;
