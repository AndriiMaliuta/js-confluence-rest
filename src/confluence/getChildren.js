import https from "https";
import axios from "axios";
import {authData, CONF_URL} from "./data.js";

export async function getPageChildren(pageId) {
    console.log(">>> Initiating 'getPageChildren' request...");

    return await axios.get(`${CONF_URL}/rest/api/content/${pageId}/child/page`, {
        headers: {
            Authorization: `Basic ${authData}`,
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });
}
