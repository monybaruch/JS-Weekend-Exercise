// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 #'a’ and 'b'
// "aabBcde" -> 2 #'a' occurs twice and 'b' twice (b° and “B’)
// "indivisibility" -> 1#'i' occurs six times
// "Indivisibilities" -> 2 #'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 #'a' and '1'
// "ABBA" -> 2 #'A' and 'B' each occur twice

const countDuplicates = (str) => {
  let obj = {};
  let counter = 0;
  let splitStr = str.toLowerCase().split('');
  for (let i of splitStr) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  console.log(obj);
  for (let i in obj) {
    if (obj[i] > 1) {
      counter++;
    }
  }
  return counter;
};

console.log(countDuplicates('Indivisibilities'));
console.log(countDuplicates('aA11'));
