/**
 * Created by meicj on 15/10/22.
 */

var config = {
    '97': '1097',
    '99': '1099',
    '88': '1088',
    '89': '1089'
};

var forward = require('./index.js');
var portTo, portForm;

for (portTo in config) {
    portForm = config[portTo];
    forward(portForm, portTo);
}