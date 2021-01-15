const cliches = require('cliches');

function querystring(url = null) {
    const [_, text] = unescape(url).match(/text=(.*)/) || [null, null];
    return text;
}

function allowOrigin(origin = "*") {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, GET',
    };
}

function getCliches(string = null, content = []) {
    const body = content.length ? JSON.parse(content.join('')) : null;
    const text = body && body.text ? body.text : string;
    const results = cliches.test(text);

    return { results };
}

exports.endpoint = function (request, response) {
    const timeStamp = new Date().valueOf();
    const { url, method = 'GET' } = request;
    const string = querystring(url);
    let content = [];

    request.on('data', (c) => content.push(c));
    request.on('end', () => {
        const options = allowOrigin();
        const results = getCliches(string, content);

        response.writeHead(200, options);
        response.end(JSON.stringify({ results, method, timeStamp }));
    });
};
