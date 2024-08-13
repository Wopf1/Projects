function a() {
  console.log("declaration a");
}
const b = () => {
  console.log("exppression b");
};
a.call();
b.call();
const teacher = {
  firstName: "Big",
  secondName: "Hey",
  points: 0,
  givePoints: function (n1, n2) {
    return this.points += n1 + n2;
  },
};
const student = {
    firstName: 'Harry',
    secondName: 'Potter',
    points: 0
}
console.log(teacher);
teacher.givePoints()
console.log(teacher);


teacher.givePoints.call(student, 20, 15)
console.log(student);
teacher.givePoints.apply(student, [15, 10])
console.log(student);

const numbers = [1, 10, 2, 8];
console.log(Math.max.apply(null, numbers));

const binder = teacher.givePoints.bind(student, 10, 7)
console.log(student);
binder()
console.log(student);
