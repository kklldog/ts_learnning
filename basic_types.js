var isDone = false;
var decliteral = 6;
var _name = 'zhou';
_name = "agile";
var age = 37;
var sentence = "hello my name is " + _name + " i will be " + (age + 1) + " years old next month .";
var list = ["1", "2", "3"];
var list1 = [1, 2, 3];
var x;
x = ['hello', 10];
//x = [1,2];
console.log(x[0].substr(1));
//x[2] = 'world';
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
var colorName = Color[2];
var notSure = 4;
notSure = "string instead";
notSure = false;
notSure.ifExists();
notSure.toFixed();
var prettySure = 4;
//prettySure.toFixed();
var list2 = [1, true, "1"];
list2[2] = "2";
function warnUser() {
    console.log('void function');
}
var unusable = null;
unusable = undefined;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
var someValue = "this is a string";
var strLength = someValue.length;
strLength = someValue.length;
