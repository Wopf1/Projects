// this - odkaz na objekt, se kterým kód aktuálně pracuje

const person1 = {
    firstName: 'Harry',
    secondName: 'Potter',
    introduction: function(){
        return `Ahoj, moje jméno je ${this.firstName} a příjmení ${this.secondName}`;
    }
}

console.log(person1.firstName);
console.log(person1.secondName);
console.log(person1.introduction());