const dotenv = require("dotenv");
dotenv.config();

const username = process.env.username;
const password = process.env.password;
const bh = process.env.bh;
const cloudToken = process.env.cloudToken;

module.exports = {
  authData: Buffer.from(`${username}:${password}`).toString("base64"),
  CONF_URL: "http://localhost:7190",
};
