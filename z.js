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

const parDir = './24h/2101toEND';
const startId = 2101,
  endId = 10018;

// for (let id = startId; id <= endId; id++) {
//   if (fs.existsSync(`${parDir}/${id}`)) {
//     const currPath = `${parDir}/${id}`;
//     const newPath = `${parDir}/sl${id}`;

//     fs.rename(currPath, newPath, function (err) {
//       if (err) console.log(err);
//       else console.log('Successfully renamed id', id);
//     });
//   }
// }

for (let id = startId; id <= endId; id++) {
  if (fs.existsSync(`${parDir}/sl${id}/`) && !fs.existsSync(`${parDir}/sl${id}/${id}.zip`)) {
    fs.rm(`${parDir}/sl${id}`, { recursive: true, force: true });
    console.log('removed', id);
  }
}
