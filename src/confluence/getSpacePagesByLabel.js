import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";

export async function getSpacePagesByLabel(spaceKey, label) {
    console.log(">>> Initiating REST request...");

    return await axios.get(
        `${CONF_URL}/rest/api/search?cql=space+=+${spaceKey}+and+type+=+"page"+and+label+%3D+${label}`,
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
