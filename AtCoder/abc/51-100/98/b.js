"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
var N = +input[0];
var S = input[1];
for (var i = 0; i < N; i++) {
    var xSet = new Set();
    var x = S.substr(0, i);
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var c = x_1[_i];
        xSet.add(c);
    }
    console.log(xSet.size);
    var y = S.substr(i);
    console.log(x, y);
}
