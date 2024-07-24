import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";

export async function createComment(
    space,
    title,
    body,
    parentId,
    pageId
) {
    console.log(">>> Initiating [createComment] request...");

    const data = {
        type: "comment",
        title: title,
        space: {key: space},
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
}
