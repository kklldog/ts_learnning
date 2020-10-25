let isDone: boolean = false;

let decliteral: number = 6;

let _name: string = 'zhou';
_name = "agile";
let age = 37;
let sentence = `hello my name is ${_name} i will be ${age + 1} years old next month .`

let list: string[] = ["1", "2", "3"];

let list1: Array<number> = [1, 2, 3];

let x: [string, number];

x = ['hello', 10];

//x = [1,2];

console.log(x[0].substr(1));

//x[2] = 'world';

enum Color {
    Red = 1, 
    Green,
    Blue
};
let c: Color = Color.Blue;
let colorName = Color[2];

let notSure: any = 4;
notSure = "string instead";
notSure = false;

notSure.ifExists();
notSure.toFixed();

let prettySure: Object = 4;
//prettySure.toFixed();
let list2: any[] = [1,true,"1"];
list2[2] = "2";

function warnUser(): void {
    console.log('void function');
}

let unusable: void = null;
unusable = undefined;

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("something failed");
}

function infiniteLoop(): never {
    while (true) {
        
    }
}

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

strLength = (someValue as string).length;