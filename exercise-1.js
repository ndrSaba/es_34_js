// Class definition
class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }
    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        if (value.length < 4) {
            alert("Nome troppo corto");
            return;
        }
        this._firstName = value;
    }
    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        if (value.length < 3) {
            alert("Cognome troppo corto");
            return;
        }
        this._lastName = value;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);