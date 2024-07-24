const getPage = require("./getPage");
const getChildren = require("./getChildren");
const getDescendants = require("./getDescendants");
const getSpacePagesByLabel = require("./getSpacePagesByLabel");
const getScrollSpaceTemplates = require("./scroll-templates");
const createPage = require("./createPage");
const deleteLabel = require("./deleteLabel");
const getPageLabels = require("./getPageLabels");
const getPageCloud = require("./cloud/getPageCloud");
const createComment = require("./createComment");

// todo GET /rest/api/content/{id}/restriction/byOperation
// todo GET /rest/api/space/{spaceKey}/content
// todo GET /rest/api/content/{id}/child/attachment
// todo DELETE /rest/api/content/{id}/label/...

async function init() {
  //http://localhost:7190/pages/editpage.action?pageId=1901014
  const PAGE_ID = 2621591;

  const start = new Date();
  console.log(start);

  // == GET
  // getPage(PAGE_ID)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  // == SCROLL
  // getScrollSpaceTemplates('COG');
  //   getDescendants(PAGE_ID).then((res) => console.log(res.data));
  //   getSpacePagesByLabel("TEST", "test").then((res) => console.log(res.data));

  // ====== Create Page =====
  // createPage("JS", "JS test", "this is body", PAGE_ID)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.error(err));

  // create several pages
  const SIZE = 40;
  for (let a = 1; a <= SIZE; a++) {
    createPage("JS", `JS test 33 ${a}`, `this is body test ${a}`, 2621589)
      .then((res) => {
        const end = new Date();
        console.log(end);
        // console.log(res.data);
        if (a === SIZE) {
          console.log(`>>> time taken is :: ${seconds}`);
        }
      })
      .catch((err) => console.error(err));
  }

  // ====== Create comment ======
  // createComment('TEST', 'test title', 'rest comment!', 1000, PAGE_ID).then(
  //   (res) => console.log(res.data)
  // );

  // == Labels
  // getPageLabels(PAGE_ID).then((res) => {
  //   for (label of res.data.results) {
  //     deleteLabel(PAGE_ID, label.name);
  //   }
  // });

  // deleteLabel(7962799, "error-template").then((res) => console.log(res.data));

  //   ---- CLOUD ---
  // getPageCloud(PAGE_ID).then((res) => console.log(res.data));

  // CHECK
  const end = new Date();
  const seconds = (end.getTime() - start.getTime()) / 1000;
  console.log(`>>> time taken is :: ${seconds}`);
}

// init
init();
