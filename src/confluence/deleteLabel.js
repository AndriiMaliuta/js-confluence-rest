import axios from "axios";
import https from "https";

import {authData, CONF_URL} from './data.js';

export async function deleteLabel(pageId, label) {
    console.log('>>> Initiating REST request...');

    return axios.delete(`${CONF_URL}/rest/api/content/${pageId}/label/${label}`, {
        headers: {
            Authorization: `Basic ${authData}`,
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });
}
