const fs = require('fs');
const getDescription = require('./get-description');
const getInfo = require('./get-info');

let IDList = [];
function loadData() {
  var dataContent = fs.readFileSync('./JSON/IDList.json');
  IDList = JSON.parse(dataContent);
}

loadData();

const parDir = './data';

for (const id of IDList) {
  const dir = `${parDir}/${id}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  getDescription(dir, id);
  getInfo(dir, id);
}
