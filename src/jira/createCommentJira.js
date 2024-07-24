const JIRA_URL = process.env.JIRA_URL;
const JIRA_TOKEN = process.env.JIRA_TOKEN;

export async function createComment(issueKey) {

    const resp = await fetch(`${JIRA_URL}/rest/api/2/issue/${issueKey}/comment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${JIRA_TOKEN}`
        },
        body: JSON.stringify({
            "body": "Lorem ipsum dolor sit amet...",
            "visibility": {
                "type": "role",
                "value": "Administrators"
            }
        })
    });

    return await resp;

}
