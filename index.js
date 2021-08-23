const fs = require('fs');
const getDescription = require('./get-description');
const getInfo = require('./get-info');
const getTestcase = require('./get-testcase');

let IDList = [];
function loadData() {
  var dataContent = fs.readFileSync('./JSON/IDList.json');
  IDList = JSON.parse(dataContent);
}

loadData();

const dataDir = './data';
const testDir = './test';

for (const id of IDList) {
  const dir = `${dataDir}/${id}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  getDescription(dir, id);
  getInfo(dir, id);

  // {
  //   // download Testcase
  //   const dir = `${testDir}/${id}`;
  //   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  //   getTestcase(dir, id);
  // }
}
