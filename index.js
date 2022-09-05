/**
 * Created by lifubang on 2017/8/22.
 */
const fs = require('fs');
const stdout = process.stdout;

const stdinFd = (process.platform === 'win32') ? process.stdin.fd : fs.openSync('/dev/stdin', 'rs');
const BUFSIZE = 128;
const STOPCHAR = " \n,\r";

var readToken = '';
var readIndex = 0;

function readStop(stops) {
    let token = [];

    let tkLen = readToken.length;
    if (readIndex >= tkLen) {
        readToken = readFromStdinToBuffer();
        tkLen = readToken.length;
        readIndex = 0;
    }
    while (readIndex < tkLen) {
        let char = readToken[readIndex++];
        if (stops.indexOf(char) > -1 && token.length > 0) {
            if (token.length > 0) {
                break;
            }
        } else {
            token.push(char);
        }
        if (readIndex >= tkLen) {
            readToken = readFromStdinToBuffer();
            tkLen = readToken.length;
            readIndex = 0;
        }
    }

    return token.join('');
}

function readCounts(counts) {
    let token = [];

    let tkLen = readToken.length;
    if (readIndex >= tkLen) {
        readToken = readFromStdinToBuffer();
        tkLen = readToken.length;
        readIndex = 0;
    }

    let read = 0;
    while (read < counts && readIndex < tkLen) {
        let char = readToken[readIndex++];
        if (char == '\n' || char == '\r') {
            if (read > 0) {
                break;
            }
        } else {
            token.push(char);
            if (++read >= counts) {
                break;
            }
        }
        if (readIndex >= tkLen) {
            readToken = readFromStdinToBuffer();
            tkLen = readToken.length;
            readIndex = 0;
        }
    }

    return token.join('');
}

function readFromStdinToBuffer() {
    let buf = Buffer.alloc(BUFSIZE);
    let bytesRead = 0
    try {
       bytesRead = fs.readSync(stdinFd, buf, 0, BUFSIZE);
    } catch(error) {
      console.trace(error);
    }
  
    if(bytesRead === 0) {
      return ''
    }

    return buf.toString('utf8', 0, bytesRead);
}

module.exports = {
    gets: function(counts) {
        let str = readCounts(counts);
        return str;
    },
    printsth: function() {
        for (let i=0; i<arguments.length; i++) {
            if (i > 0) {
                stdout.write(Buffer.from(" "));
            }
            if (arguments[i] != null) {
                stdout.write(Buffer.from(arguments[i].toString()));
            }
        }
    },
    print: function() {
        console.log(...arguments);
    },
    readInt: function() {
        let str = readStop(STOPCHAR);
        let num = parseInt(str);
        return isNaN(num) ? null : num;
    },
    readDouble:  function() {
        let str = readStop(STOPCHAR);
        let num = parseFloat(str);
        return isNaN(num) ? null : num;
    },
    read_line: function() {
        let str = readCounts(1024);
        return str;
    },
    readline: function() {
        let str = readCounts(1024);
        return str;
    },
    readLine: function() {
        let str = readCounts(1024);
        return str;
    }
}