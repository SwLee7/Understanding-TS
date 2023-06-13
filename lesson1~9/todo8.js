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
function newFunc(a, func1, func2) {
    var result1 = func1(a);
    var result2 = func2(result1);
}
newFunc('010-1111-2222', cutZero, removeDash);
// 먼저 JS로 함수를 만들고 그 후에 type 지정하는 것도 하나의 문제 풀이 방법이 되겠네...
