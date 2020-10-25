function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "agile",
    lastName: "zhou"
};
greeter(user);
