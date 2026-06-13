export function betterThanAverage(
  classPoints: number[],
  yourPoints: number,
): boolean {
  let average: number = classPoints.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  if (average / classPoints.length >= yourPoints) {
    return false;
  } else {
    return true;
  }
}
