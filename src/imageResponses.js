const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
    response.writeHead(200, { 'MIME-Type': 'image/png' });
    response.write(spongegar);
    response.end();
};

// export
module.exports.getSpongegar = getSpongegar;
