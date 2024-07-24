import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";

export async function getPage(pageId) {
    console.log('>>> Initiating [getPage] request...');

    return axios.get(`${CONF_URL}/rest/api/content/${pageId}`, {
        headers: {
            Authorization: `Basic ${authData}`,
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });
}
