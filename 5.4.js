// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase = (str) => {
  let weirdStr = [];
  for (let i in str) {
    if (i % 2 === 0) {
      weirdStr.push(str[i].toUpperCase());
    } else {
      weirdStr.push(str[i].toLowerCase());
    }
  }
  return weirdStr.join('');
};

console.log(toWeirdCase('Weird string case'));

//refactoring

const toWeirdCase2 = (str) => {
  let weirdStr = [];
  for (let i in str) {
    i % 2 === 0 ? weirdStr.push(str[i].toUpperCase()) : weirdStr.push(str[i].toLowerCase());
  }
  return weirdStr.join('');
};
console.log(toWeirdCase2('Weird string case'));

// 1 more way without pushing into a new array

const toWeirdCase3 = (str) => {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    for (let j = 0; j < str[i].length; j++) {
      j % 2 === 0 ? (str[i][j] = str[i][j].toUpperCase()) : (str[i][j] = str[i][j].toLowerCase());
    }
    str[i] = str[i].join('');
  }
  return str.join(' ');
};
console.log(toWeirdCase3('Weird string case'));
