const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request-promise');

function getDescription(dir, id) {
  request(`http://csloj.ddns.net/problem/${id}/edit`, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html); // load HTML

      let content = $('.markdown-edit').text();
      if (content !== '') {
        content = content.split('\n#### ').join('\n## ');
        content = content.split('\n##### ').join('\n### ');

        console.log(`Problem ${id}: was crawled description!`);
        fs.writeFileSync(`${dir}/desc.md`, content);
      } else {
        console.log('Problem id', id, " doesn't exist!");
      }
    } else {
      console.log(`Problem ${id}: can't crawl!`);
    }
  });
}

module.exports = getDescription;
