const axios = require("axios");
const https = require("https");
const { authData, CONF_URL } = require("./data");

module.exports = async function createPage(space, title, body, parent_id) {
  console.log(">>> Initiating REST request...");

  data = {
    title: title,
    type: "page",
    space: { key: space },
    body: {
      storage: {
        value: body,
        representation: "storage",
      },
    },
    ancestors: [{ id: parent_id }],
  };

  return await axios({
    method: "post",
    url: `${CONF_URL}/rest/api/content`,
    headers: {
      Authorization: `Basic ${authData}`,
      "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    data: data,
  });
};
