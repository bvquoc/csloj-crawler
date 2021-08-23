const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request-promise');

function getInfo(dir, id) {
  request(`http://csloj.ddns.net/problem/${id}/`, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html); // load HTML

      const info = {};
      let title = $('title').html().toString().trim();
      title = title.substring(0, title.length - 39).trim();
      if (title !== '') {
        info.title = title;

        const tags = $('#show_tag_div')
          .text()
          .split('\n')
          .filter((item) => {
            return item.trim() !== '';
          })
          .map((item) => item.trim())
          .filter((item) => item !== 'TEST SYSTEM');
        info.tags = tags;

        console.log(`Problem ${id}: was crawled title & tags!`);
        fs.writeFileSync(`${dir}/info.json`, JSON.stringify(info));
      }
    } else {
      console.log(`Problem ${id}: can't crawl!`);
    }
  });
}

module.exports = getInfo;
