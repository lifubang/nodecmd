# node-stdio
A node interface for stdio like: cin, cout, scanf and printf.

# how to install
*  npm install node-stdio
*  need node-gyp path

# api
*   gets(size)
<br />    read number of size characters from stdin, or util meets \n. \n may in the return string.
*   printsth(sth, ...)
<br />    display sth in stdou, if there are more than on args, the diaplay split by " ", in the end there is no '\n'.
*   print(sth, ...)
<br />    display sth in stdou, if there are more than on args, the diaplay split by " ", in the end there is a '\n'.
*   readInt()
<br />    read a int or long number from stdin.
*   readDouble()
<br />    read a float or double number from stdin.
* read_line
<br />    read number of 1024 characters from stdin, or util meets \n. \n may in the return string.

# use examples
```js
var cmd = require('node-stdio');

function test() {
    cmd.printsth('This output is from nodecmd interface:\n');
    cmd.printsth(1234567890.123);
    cmd.printsth('\n');
    cmd.printsth('Hello workd.');
    cmd.printsth('\n');

    cmd.print('Please input 10 characters:');
    cmd.print(cmd.gets(10));

    cmd.printsth('Please input something:\n');
    var input = cmd.read_line();
    cmd.printsth('Your input is:\n');
    cmd.printsth(input);
    cmd.printsth('\n');

    cmd.print('Please input a int:');
    cmd.print(cmd.readInt());

    cmd.print('Please input a double:');
    cmd.print(cmd.readDouble());
}

test();
```

# OJ Example
* calc a+b, a b split by a space
```js
var cmd = require('node-stdio')
var a, b;
var solveMeFirst = (a,b) => a+b;
while((a=cmd.readInt())!=null && (b=cmd.readInt())!=null){
    let c = solveMeFirst(a, b);
    cmd.print(c);
}
```

# Thanks
lineprocessor.cc in v8 examples