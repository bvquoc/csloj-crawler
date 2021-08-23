var walk = require('walk');
const fs = require('fs');
var files = [];

// Walker options
var walker = walk.walk('./data', { followLinks: false });

walker.on('file', function (root, stat, next) {
  // Add this file to the list of files
  files.push(root.substr(7));
  next();
});

walker.on('end', function () {
  files.sort((a, b) => a - b);
  console.log(files);
  fs.writeFileSync(`./JSON/IDList.json`, JSON.stringify(files));
});
