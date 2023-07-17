/*Ex2.1 - Sum of lowest numbers
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

const arr = [22, 55, 120, 87, 99, 16, 4];

const SumOfLowestNum = (arr) => {
  const first = Math.min(...arr);
  arr.splice(arr.indexOf(first), 1);
  const second = Math.min(...arr);
  return first + second;
};

console.log(SumOfLowestNum(arr));

// 1 more way

console.log(arr); // the arr array is different because we sliced it in the previous function

const SumOfLowestNum2 = (arr) => {
  return items.arr((a, b) => a + b);
};

console.log(SumOfLowestNum(arr));
