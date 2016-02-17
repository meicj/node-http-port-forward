/**
 * Created by meicj on 15/10/22.
 */

const http = require('http');
const forward = require('http-forward');

module.exports =
    function forwardPort(portForm, portTo, isPrivateAccess) {

        var listenHost = isPrivateAccess ? '127.0.0.1' : '0.0.0.0';
        var server = http.createServer(function (req, res) {

            req.forward = {target: 'http://localhost:' + portForm};

            forward(req, res)
        });

        server.listen(portTo, listenHost);
        console.log('server start. forward port ' + portForm + ' to ' + portTo);
    };
