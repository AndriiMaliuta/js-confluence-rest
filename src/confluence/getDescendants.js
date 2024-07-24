import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";


export async function getPageChildren(pageId) {
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
}
