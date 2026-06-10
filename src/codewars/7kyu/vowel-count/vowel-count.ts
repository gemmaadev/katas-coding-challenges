function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// function getCount(str) {
// // Match all occurrences of a, e, i, o, u globally
//   const vowels = str.match(/[aeiou]/g);

// // If vowels are found, return the count; otherwise, return 0
//   return vowels ? vowels.length : 0;
// }
