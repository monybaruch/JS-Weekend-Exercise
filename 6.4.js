// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter case

const isIsogram = (str) => {
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsogram('aba'));

// using index of it's chat gpt answer

const isIsogram2 = (str) => {
  // Convert the string to lowercase to ignore letter case
  str = str.toLowerCase();

  // Loop through each letter of the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current letter appears later in the string
    if (str.indexOf(str[i], i + 1) !== -1) {
      // If the letter is found later in the string, it's not an isogram
      return false;
    }
  }

  // If no repeating letter is found, it's an isogram
  return true;
};
console.log(isIsogram2('Dermatoglyphics'));

// 1 more answer using includes

const isIsogram3 = (str) => {
  str = str.toLowerCase();
  let include = [];
  for (let char of str) {
    if (include.includes(char)) {
      return false;
    } else {
      include.push(char);
    }
    console.log(include);
  }
  return true;
};

console.log(isIsogram3('moOse'));
