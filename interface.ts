interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "hello " + person.firstName + " " + person.lastName;
}

let user = {
    firstName: "agile",
    lastName: "zhou"
};

greeter(user);

function printLable(labeledObj: { 
    label: string
}) {
    console.log(labeledObj.label);
}

let myObj =  { szie: 10, label: "size 10 obj" };
printLable(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number} {
    let newSquare = {
        color:"white", area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySq = createSquare({color: "black"});

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};

//p1.x = 10;

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = [1,2,3,4];

function createSquare1(config: SquareConfig): {color: string; area: number} {
    return {
        color: config.color || "red",
        area: config.width ? config.width* config.width: 20
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


let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare1(squareOptions);

interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source:string, substring: string):boolean {
    return 1==1;
}

mySearch = function (src, sub){
    return 1==1;
}

// mySearch = function (src, sub) {
//     return "string";
// }

interface StringArray {
    [a: number]: string;
}

let myarr : StringArray;
myarr = ["1" , "2"];

let mystr : string = myarr[0];
// mystr = myarr["1"];