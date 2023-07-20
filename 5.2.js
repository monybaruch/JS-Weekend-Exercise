// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeatStr = (repeatedStr) => {
  return `I love you so ${repeatedStr.repeat(3)}`;
};
console.log(repeatStr('much '));
