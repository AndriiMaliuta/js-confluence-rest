import axios from "axios";
import https from "https";
import {authData, CONF_URL} from "./data.js";

export function getSpaceScrollTemplates(spaceKey) {
    console.log('Initiating [getSpaceScrollTemplates] request...');
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
        .catch(err => console.log("Error performing [getSpaceScrollTemplates] request"
            , err));
}
