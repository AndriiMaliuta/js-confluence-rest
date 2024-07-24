const axios = require('axios');
const https = require('https');
const { authData, CONF_URL } = require('./data')
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

module.exports = function getSpaceScrollTemplates(spaceKey) {
    console.log('Initiating REST request...');
    axios.get(`${CONF_URL}/plugins/servlet/scroll-office/api/templates?spaceKey=${spaceKey}`, {
    headers: {
        "Authorization": `Basic ${authData}`
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
})
    .then(res => {
        let templates = res.data;
        for (template of templates) {
            console.log(template.name);
            console.log(template.spaceKey);
            console.log(template.type);
            console.log(template.creator);
            console.log('============');
        }
    })
    .catch(err => console.log(err));
}

// module.exports = {
//     test: 'test'
// }
