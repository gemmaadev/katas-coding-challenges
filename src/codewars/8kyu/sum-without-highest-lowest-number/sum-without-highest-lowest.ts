export function sumArray(array: number[] | null): number {
  //Early return: si es null, array buit o array amb 1 element return 0
  if (array === null || array.length === 0 || array.length === 1) {
    return 0;
  }

  //Ordenem de major a menor o de menor a major tot l'array
  let sortedArray = array.sort((highest, lowest) => {
    return highest - lowest;
  });

  //Eliminem la primera i l'última posició de la llista
  sortedArray = sortedArray.slice(1, -1);

  //Sumem tots els números de l'array
  const totalSum: number = sortedArray.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );

  //Retornem resultat
  return totalSum;
}
