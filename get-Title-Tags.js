const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request-promise');

// const src = `\n\n**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)`

const parDir = './desc';
const MAX_ID = 5;
const ID_TAG = '#show_tag_div';

for (let id = 1; id <= MAX_ID; id++) {
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

        console.log('Problem id', id, ' was crawled title & tags!');

        const dir = `${parDir}/${id}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(`${dir}/info.json`, JSON.stringify(info));
      }
    } else {
      console.log("Can't cralw", id);
      // console.log(error);
    }
  });
}
