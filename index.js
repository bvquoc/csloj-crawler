const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request-promise");

// const endText = `\n\n**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)`

const parDir = "./data";
const problemIDList = [];
const MAX_ID = 50; // 10018;

for (let id = 1; id <= MAX_ID; id++) {
  request(
    `http://csloj.ddns.net/problem/${id}/edit`,
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html); // load HTML

        let content = $(".markdown-edit").text();
        if (content !== "") {
          problemIDList.push(id);
          // content = content.split("$").join("~");
          content = content.split("\n#### ").join("\n## ");
          content = content.split("\n##### ").join("\n#### ");
          // content = `${content}${endText}`;
          console.log("Problem id", id, " was crawled!");
          const dir = `${parDir}/${id}`;
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(`${dir}/desc.md`, content);
        } else {
          console.log("Problem id", id, " doesn't exist!");
        }
      } else {
        console.log("Can't cralw", id);
        // console.log(error);
      }
    }
  );
}

// fs.writeFileSync(`${parDir}/problemIDList.json`, JSON.stringify(problemIDList));
