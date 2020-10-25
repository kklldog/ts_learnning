class Student {
    fullName: string;
    constructor(public firstName: string, public midd: string, public lastName: string) {
        this.fullName = firstName + " " + midd + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Student) {
    return "hello " + person.firstName + " " + person.lastName;
}

let user = new Student("agile", ".", "zhou");

greeter(user);