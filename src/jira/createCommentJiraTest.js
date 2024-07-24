import { createComment } from "./createCommentJira.js";


createComment("IP-251565").then(resp => {
  console.log(resp)
});

