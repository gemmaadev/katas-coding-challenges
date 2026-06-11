export function squareSum(number: number[]): number {
  const square: number = number
    .map((number) => number * number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return square;
}
