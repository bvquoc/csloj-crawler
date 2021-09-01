const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const request = require('request');

let IDList = [];
function loadData() {
  var dataContent = fs.readFileSync('./JSON/IDList.json');
  IDList = JSON.parse(dataContent);
}

loadData();

const dataDir = './dmoj';

function hanle(id, dir) {
  let initYml = `archive: ${id}.zip\n`;

  request(`http://csloj.ddns.net/problem/${id}/testdata`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const dom = new JSDOM(body);
      const arr = dom.window.document.querySelectorAll('tr.center.aligned > td');

      const ans = [],
        sz = arr.length / 2;
      for (let i = 0; i < sz; i++)
        if (arr[i * 2] && arr[i * 2 + 1]) {
          const inp = arr[i * 2].innerHTML;
          const out = arr[i * 2 + 1].innerHTML;
          ans.push([inp, out]);
        }

      initYml = initYml.concat(`test_cases:\n`);
      for (let i = 0; i < ans.length; i++) {
        initYml = initYml.concat(`  - in: ${ans[i][0]}\n`);
        initYml = initYml.concat(`    out: ${ans[i][1]}\n`);
        initYml = initYml.concat(`    points: 1\n`);
      }
      if (ans.length > 0) {
        fs.writeFileSync(`${dir}/init.yml`, initYml);
        // console.log(initYml);
        console.log('Problem', id, 'was crawled test info.');
      }
    }
  });
}

for (const id of IDList) {
  const dir = `${dataDir}/sl${id}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(`${dir}/init.yml`)) hanle(id, dir);
}
