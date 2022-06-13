# node-stdio
A node interface for stdio like: cin, cout, scanf and printf.

# how to install
*  npm install node-stdio

# api
*   readInt()
<br />    read a int or long number from stdin.
*   readDouble()
<br />    read a float or double number from stdin.
*   read_line()
<br />    read number of 1024 characters from stdin, or util meets \n.
*   gets(size)
<br />    read number of size characters from stdin, or util meets \n.
*   printsth(sth, ...)
<br />    display sth in stdou, if there are more than on args, the diaplay split by " ", in the end there is no '\n'.
*   print(sth, ...)
<br />    display sth in stdou, if there are more than on args, the diaplay split by " ", in the end there is a '\n'.
<br />    just like `console.log()`.

# use examples
```js
var cmd = require('node-stdio');

function test() {
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
Everyone uses this tool.
