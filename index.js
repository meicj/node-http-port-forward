/**
 * Created by meicj on 15/10/22.
 */

var http = require('http');
var forward = require('http-forward');

/**
 * Forward port for incoming HTTP requests
 * @param {Number} portForm - The port NO. which you want to forward from
 * @param {Number} portTo - The port NO. which you want to forward to
 * @param {Object} [options] - Options Config object passed to the forward
 * @param {Boolean} [options.isPublicAccess=false] - If true the new port will be accessible for others
 */
function forwardPort(portForm, portTo, options) {

    options = options || {};

    var listenHost = options.isPublicAccess ? '0.0.0.0' : '127.0.0.1';
    var server = http.createServer(function (req, res) {

        req.forward = {target: 'http://localhost:' + portForm};
        forward(req, res);

    });

    server.listen(portTo, listenHost);

    console.log(
        'server start. forward port ' + portForm + ' to ' + portTo +
        (options.isPublicAccess ? '(publicly accessible)' : '')
    );
}

module.exports = forwardPort;
