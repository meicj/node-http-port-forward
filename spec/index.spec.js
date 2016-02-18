/**
 * Created by meicj on 16/2/18.
 */

describe('index', function () {

    var forward = require('..');
    var httpHelper = require('./helpers/http.js');

    beforeEach(function () {
        httpHelper.createServer(9080, 200);
    });

    it('Forward status code', function (done) {

        // 9090 not available port before forward
        httpHelper.get('9090', function () {
            expect('this').toBe('not called');
        }, function (err) {
            expect(err).not.toBe(undefined);
        }, function () {

            // forward 9080 to 9090
            forward(9080, 9090);

            // 9090 should be available
            httpHelper.get('9090', function (res) {
                expect(res.statusCode).toBe(200);
            }, function (err) {
                expect(err).toBe(undefined);
            }, function () {
                done();
            });
        });
    });
});