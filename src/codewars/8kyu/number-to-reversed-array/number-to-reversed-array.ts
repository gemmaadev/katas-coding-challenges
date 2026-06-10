export const digitize = (number: number): number[] => {
  return [...number.toString()].map(Number).reverse();
 };

//  export const digitize = (number: number): number[] => {
//   let array = Array.from(String(number), Number).reverse();
//   return array;
//  };