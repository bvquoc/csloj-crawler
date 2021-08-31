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

const dataDir = './testinfo';

function hanle(id, dir) {
  const ans = {};

  request(`http://csloj.ddns.net/problem/${id}/testdata`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const dom = new JSDOM(body);
      const arr = dom.window.document.querySelectorAll('tr.center.aligned > td');

      ans.size = arr.length / 2;
      ans.data = {};
      for (let i = 0; i < arr.length / 2; i++)
        if (arr[i * 2] && arr[i * 2 + 1]) {
          const inp = arr[i * 2].innerHTML;
          const out = arr[i * 2 + 1].innerHTML;
          ans.data[i] = [inp, out];
        }
      fs.writeFileSync(`${dir}/test.json`, JSON.stringify(ans));
      console.log('Problem', id, 'was crawled test info.');
    }
  });
}

for (const id of IDList) {
  const dir = `${dataDir}/${id}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  hanle(id, dir);
}
