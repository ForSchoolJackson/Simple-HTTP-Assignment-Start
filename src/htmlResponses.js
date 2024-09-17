const fs = require('fs'); // pull file in system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const rich = fs.readFileSync(`${__dirname}/../client/rich-client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

const getRichClient = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(rich);
  response.end();
};

// export them
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getRichClient = getRichClient;
