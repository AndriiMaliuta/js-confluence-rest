const axios = require("axios");
const https = require("https");
const { authData, CONF_URL } = require("./data");

module.exports = async function getPageChildren(pageId) {
  console.log(">>> Initiating REST request...");

  return await axios.get(
    `${CONF_URL}/rest/api/search?cql=type = "page" and ancestor+%3D+"${pageId}"`,
    {
      headers: {
        Authorization: `Basic ${authData}`,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  );
};
