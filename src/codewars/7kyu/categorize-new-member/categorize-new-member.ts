export function openOrSenior(data) {
  // We use .map() to iterate over each pair [age, handicap]
  return data.map(([age, handicap]) => {
    // If 55 years old or older AND have a handicap greater than 7, you are a Senior
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      // In any other case, it is Open
      return "Open";
    }
  });
}
