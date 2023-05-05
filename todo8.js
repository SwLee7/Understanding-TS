var 회에원정보 = {
    name: "kim",
    pulsOne: function (x) {
        x + 1;
    },
    changeName: function () {
        console.log("잘 되나?");
    },
};
var cutZero = function (x) {
    if (x[0] === '0') {
        return x.substring(1);
    }
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
var func1st = function (param1) {
    return param1 + 7;
};
var func2nd = function (param1) {
    return param1 + 3;
};
var function3 = function (param2) {
    return param2 + 4;
};
function3(func2nd(func1st(3)));
