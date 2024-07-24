const axios = require('axios');
const https = require('https');
const { authData, CONF_URL } = require('./data');

module.exports = async function deleteLabel(pageId, label) {
  console.log('>>> Initiating REST request...');

  return axios.delete(`${CONF_URL}/rest/api/content/${pageId}/label/${label}`, {
    headers: {
      Authorization: `Basic ${authData}`,
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
};
