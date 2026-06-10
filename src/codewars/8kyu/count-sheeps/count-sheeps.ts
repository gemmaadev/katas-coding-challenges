export function countSheep(number: number): string {
  let result: string = "";

  for (let i = 1; i <= number; i++) {
    result += `${i} sheep...`;
  }

  return result;
}
