import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";

export async function getPageLabels(pageId) {
    console.log(">>> Initiating REST request...");

    return axios.get(`${CONF_URL}/rest/api/content/${pageId}/label/`, {
        headers: {
            Authorization: `Basic ${authData}`,
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });
}
