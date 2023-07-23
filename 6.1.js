// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z anda. .z.

const accum = (arr) => {
  let result = [],
    mumblingWord = arr.toLowerCase().split('');
  for (let i = 0; i < mumblingWord.length; i++) {
    result.push(mumblingWord[i].toUpperCase());
    for (let j = i; j > 0; j--) {
      result.push(mumblingWord[i]);
    }
    if (i < mumblingWord.length - 1) {
      result.push('-');
    }
  }
  return result.join('');
};

console.log(accum('abcd'));

// a shorter answer

const accum2 = (arr) =>
  arr
    .toLowerCase()
    .split('')
    .map((char, idx) => char.toUpperCase() + char.repeat(idx))
    .join('-');

console.log(accum2('abcd'));
