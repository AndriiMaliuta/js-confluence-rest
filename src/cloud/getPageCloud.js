const axios = require('axios');
const https = require('https');
const { authData, CONF_URL } = require('../confluence/data.js');

module.exports = async function getPage(pageId) {
  console.log('>>> Initiating REST request...');

  return axios.get(`${CONF_URL}/rest/api/content/${pageId}`, {
    headers: {
      Authorization: `Basic ${authData}`,
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
};
