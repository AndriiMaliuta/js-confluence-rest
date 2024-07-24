import {getIssue} from './getIssue.js'

getIssue("IP-251565").then(resp => {
    console.log(resp)
})