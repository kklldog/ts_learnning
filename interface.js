function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "agile",
    lastName: "zhou"
};
greeter(user);
function printLable(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { szie: 10, label: "size 10 obj" };
printLable(myObj);
function createSquare(config) {
    var newSquare = {
        color: "white", area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySq = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
//p1.x = 10;
var a = [1, 2, 3, 4];
var ro = [1, 2, 3, 4];
function createSquare1(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
// let sqo =   {
//     colour: "red",
// };
// let mySq1 = createSquare1(
//     sqo
// );
// let mySq1 = createSquare1(
//     {
//         colour: "red",
//         width: 100
//     } as SquareConfig
// );
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare1(squareOptions);
var mySearch;
mySearch = function (source, substring) {
    return 1 == 1;
};
mySearch = function (src, sub) {
    return 1 == 1;
};
var myarr;
myarr = ["1", "2"];
var mystr = myarr[0];
// mystr = myarr["1"];
