const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getUserInfo(id) {
  const result = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
  console.log(result[0][0]);
  return result[0][0];
}

async function checkEmailRegistered(email) {
  const result = await pool.query("SELECT * FROM user WHERE email = ?", [
    email,
  ]);
  console.log(result[0][0]);
  return result[0][0];
}

// Do not need ` ` around name and password when insert data to table
async function signUp(name, email, password) {
  const result = await pool.query(
    `
    INSERT INTO user (name, email, password)
    VALUES 
    (?, ?, ?);
    `,
    [name, email, password]
  );
  const id = result[0].insertId;
  return getUserInfo(id);
}

// checkEmailRegistered("chanyihcheg@gmail.com");
// getUserInfo(1);

module.exports = { getUserInfo, checkEmailRegistered, signUp };
