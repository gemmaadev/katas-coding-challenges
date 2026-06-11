export const digitize = (number: number): number[] => {
  return [...number.toString()].map(Number).reverse(); //... Divide una cadena de texto en un array de caracteres individuales
 };

//  export const digitize = (number: number): number[] => {
//   let array = Array.from(String(number), Number).reverse();
//   return array;
//  };