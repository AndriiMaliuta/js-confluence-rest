
const JIRA_URL = process.env.JIRA_URL;
const JIRA_TOKEN = process.env.JIRA_TOKEN;

export async function getIssue(issueKey) {
    console.info(`>>> Getting issue ${issueKey}`);
    const resp = await fetch(`${JIRA_URL}/rest/api/2/issue/${issueKey}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${JIRA_TOKEN}`
        }
    });

    return await resp.json();

}
