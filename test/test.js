/**
 * Created by lifubang on 2017/8/22.
 */
var cmd = require('../index');

function test() {
    cmd.print('This output is from nodecmd interface:\n');
    cmd.print(1234567890.123);
    cmd.print('\n');
    cmd.print('Hello workd.');
    cmd.print('\n');
    cmd.print('Please input something:\n');

    var input = cmd.read_line();
    cmd.print('Your input is:\n');
    cmd.print(input);
    cmd.print('\n');
}

module.exports = test;

if (require.main === module) {
    test();
}