/**
 * Created by meicj on 16/2/18.
 */

var http = require('http');

function createServer(port, status) {

    var server = http.createServer(function (req, res) {
        res.statusCode = status;
        res.end();
        server.close();
    });

    server.listen(port);
}

function get(port, okCallback, errorCallback, completeCallback) {

    http.get('http://localhost:' + port, okCallback)
        .on('error', errorCallback)
        .on('close', completeCallback);
}

module.exports = {
    createServer: createServer,
    get: get
};
