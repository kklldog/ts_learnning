var Student = /** @class */ (function () {
    function Student(firstName, midd, lastName) {
        this.firstName = firstName;
        this.midd = midd;
        this.lastName = lastName;
        this.fullName = firstName + " " + midd + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = new Student("agile", ".", "zhou");
greeter(user);
