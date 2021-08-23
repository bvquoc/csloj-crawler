const http = require('http');
const fs = require('fs');

function getTestcase(dir, id) {
  const file = fs.createWriteStream(`${dir}/${id}.zip`);
  const request = http.get(
    `http://csloj.ddns.net/problem/${id}/testdata/download`,
    function (response) {
      response.pipe(file);
      console.log(`Problem ${id}: downloaded testcase!`);
    }
  );
}

module.exports = getTestcase;
