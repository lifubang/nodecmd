# node-stdio
A node interface for stdio like: cin, cout, scanf and printf.

# how to install
npm install node-stdio

# use examples
```js
var cmd = require('node-stdio');

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

test();
```

# Thanks
lineprocessor.cc in v8 examples