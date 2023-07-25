// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy"
// a ="abcdefghijklimnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklimnopqrstuvwxyz"

const s1 = 'xyaabbbccccdefww';
const s2 = 'xxxxyyyyabklmopq';

const longest = (s1, s2) => {
  let chars = s1.concat(s2).split('');
  let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
  });
  return uniqueChars.sort().join('');
};

console.log(longest(s1, s2));
