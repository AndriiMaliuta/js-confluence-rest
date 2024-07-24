const axios = require("axios");
const https = require("https");
const { authData, CONF_URL } = require("./data");

module.exports = async function createComment(
  space,
  title,
  body,
  parentId,
  pageId
) {
  console.log(">>> Initiating REST request...");

  data = {
    type: "comment",
    title: title,
    space: { key: space },
    body: {
      storage: {
        value: body,
        representation: "storage",
      },
    },
    container: {
      id: pageId,
      type: "page",
    },
  };

  return await axios.post({
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
