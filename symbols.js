const symbol1 = Symbol("bookName");
const symbol2 = Symbol("year");
const symbol3 = Symbol("author");
const book = {
  [symbol1]: "Harry Potter",
  [symbol2]: 1997,
  [symbol3]: "J. K. Rowling",
};
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(book[symbol1]);
console.log(book[symbol2]);
console.log(book[symbol3]);
console.log(symbol1.description);
console.log(symbol2.description);
console.log(symbol3.description);
