export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  const suma = array.reduce((acc, actual) => acc + actual, 0);

  return suma / array.length;
}

// export function findAverage(array: number[]): number {
// let arrayNumbers: number[] = array;
//   let suma: number = 0;
//   let media: number = 0;

//   if (arrayNumbers.length >= 1){
//     suma = arrayNumbers.reduce((acc, actual) => acc + actual, 0);
//     media = suma / arrayNumbers.length;
//     return media
//   }

// return 0;
// }
