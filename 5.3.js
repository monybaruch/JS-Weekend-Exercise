// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toUpperCamelCase = (string) => {
  const upperString = string.split('');

  return upperString
    .map(function (char, i) {
      if (char == '-' || char == '_') {
        char = upperString[i + 1].toUpperCase();
        upperString.splice(i + 1, 1);
      }
      return char;
    })
    .join('');
};

console.log(toUpperCamelCase('the-stealth-warrior'));
