// currying
const multiply = (num1, num2) => {
    return num1 * num2;
}
// normální fungování
console.log(multiply(5, 2));
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(7));
console.log(multiplyByTwo(10));
console.log(multiplyByTwo(50));
const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(10));
console.log(multiplyByThree(50));
console.log(multiplyByThree(90));